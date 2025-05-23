/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

function getStripe(): Promise<Stripe | null> {
	if (!stripePromise) {
		stripePromise = loadStripe(
			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
		);
	}

	return stripePromise;
}

export { getStripe };
