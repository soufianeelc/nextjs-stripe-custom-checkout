import { plans } from "@/features/billing/config/plans";
import { PricingCard } from "@/features/billing/components/pricing-card";

export default function PlansPage() {
	return (
		<div className='min-h-screen w-full bg-amber-600/10 py-20 px-4'>
			<div className='mx-auto max-w-7xl text-center'>
				<h1 className='text-4xl sm:text-6xl font-serif mb-4'>
					Simple & <span className='italic'>transparent</span> pricing
				</h1>
				<h2 className='text-2xl sm:text-4xl font-serif mb-16'>
					for all business sizes
				</h2>

				<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{plans.map((plan) => (
						<PricingCard
							key={plan.priceId}
							title={plan.title}
							description={plan.description}
							price={plan.price}
							priceId={plan.priceId}
							features={plan.features}
							icon={plan.icon}
							accentColor={plan.accentColor}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
