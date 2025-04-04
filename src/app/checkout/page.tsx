import { StripeCheckoutForm } from "@/features/billing/components/checkout-form";
import { plans } from "@/features/billing/config/plans";
import { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "Upgrade your plan",
	description: "Choose your subscription plan and complete your payment",
};

interface CheckoutPageProps {
	searchParams: Promise<{
		id: string;
	}>;
}

function PlanFeatures({
	features,
}: {
	features: (typeof plans)[number]["features"];
}) {
	return (
		<div>
			<h4 className='font-medium mb-4 text-foreground'>What's included</h4>
			<ul className='space-y-4' role='list'>
				{features.map((feature, index) => (
					<li key={index} className='flex items-center gap-3'>
						<span className='text-muted-foreground' aria-hidden='true'>
							{feature.icon}
						</span>
						<span className='text-sm text-muted-foreground'>
							{feature.text}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function SecureCheckoutInfo() {
	return (
		<div>
			<h4 className='font-medium mb-4 text-foreground'>Secure checkout</h4>
			<p className='text-sm text-muted-foreground'>
				Your payment is secured by industry-leading encryption and security
				measures. We never store your complete card details.
			</p>
		</div>
	);
}

function PlanSummary({ plan }: { plan: (typeof plans)[number] }) {
	return (
		<div className='sticky top-0 p-12 h-screen overflow-y-auto'>
			<div className='max-w-xl mx-auto'>
				<div className='flex items-center gap-3 mb-8'>
					<span aria-hidden='true'>{plan.icon}</span>
					<h3 className='text-xl font-medium text-foreground'>{plan.title}</h3>
				</div>

				<div className='mb-12'>
					<div className='flex items-baseline gap-2 mb-2'>
						<span className='text-5xl font-semibold text-foreground'>
							${plan.price}
						</span>
						<span className='text-lg text-muted-foreground'>per month</span>
					</div>
					<p className='text-sm text-muted-foreground'>
						Unlimited contacts, 500 Messages per month
					</p>
				</div>

				<div className='space-y-8'>
					<PlanFeatures features={plan.features} />
					<SecureCheckoutInfo />
				</div>
			</div>
		</div>
	);
}

export default async function CheckoutPage({
	searchParams,
}: CheckoutPageProps) {
	const { id } = await searchParams;
	const plan = plans.find((plan) => plan.priceId === id);

	if (!plan) {
		return notFound();
	}

	return (
		<main className='min-h-screen bg-background flex flex-col md:flex-row'>
			<div className='w-full lg:w-[45%] p-8 overflow-y-auto bg-background'>
				<div className='max-w-md mx-auto'>
					<Link
						href='/'
						className='inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8'>
						<ArrowLeft className='w-4 h-4 mr-2' aria-hidden='true' />
						Back to plans
					</Link>

					<div className='mb-8'>
						<h1 className='text-2xl font-semibold tracking-tight mb-2'>
							Subscribe to {plan.title}
						</h1>
						<p className='text-muted-foreground text-sm'>{plan.description}</p>
					</div>

					<StripeCheckoutForm lookupKey={id} />

					<p className='text-xs text-muted-foreground mt-4'>
						By subscribing, you agree to our Terms of Service and authorize us
						to charge your card for future payments in accordance with our
						terms.
					</p>
				</div>
			</div>

			<div className='w-full hidden lg:block lg:w-[55%] bg-muted'>
				<PlanSummary plan={plan} />
			</div>
		</main>
	);
}
