import { NextResponse } from "next/server";
import { stripe } from "@/lib/clients/stripe/server";
import { PLAN_LOOKUP_KEYS } from "@/features/billing/config/plans";
import { z } from "zod";

const createPaymentIntentSchema = z.object({
	lookupKey: z.enum(
		[PLAN_LOOKUP_KEYS.BASIC, PLAN_LOOKUP_KEYS.PRO, PLAN_LOOKUP_KEYS.ENTERPRISE],
		{
			required_error: "Plan lookup key is required",
			invalid_type_error: "Invalid plan type",
		}
	),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const result = createPaymentIntentSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json(
				{
					error: "Invalid request",
					details: result.error.issues,
				},
				{ status: 400 }
			);
		}

		const { lookupKey } = result.data;

		const prices = await stripe.prices.list({
			lookup_keys: [lookupKey],
		});

		if (!prices.data.length) {
			throw new Error(`No price found for lookup key: ${lookupKey}`);
		}

		const price = prices.data[0];

		const paymentIntent = await stripe.paymentIntents.create({
			amount: price.unit_amount || 0,
			currency: price.currency,
			automatic_payment_methods: {
				enabled: true,
			},
			metadata: {
				price_id: price.id,
				lookup_key: lookupKey,
			},
		});

		return NextResponse.json({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.error("Error creating payment intent:", error);

		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					error: "Validation error",
					details: error.issues,
				},
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ error: "Failed to create payment intent" },
			{ status: 500 }
		);
	}
}
