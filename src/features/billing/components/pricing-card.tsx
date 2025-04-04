import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface PricingCardProps {
	title: string;
	description: string;
	price: number;
	priceId: string;
	features: {
		icon: ReactNode;
		text: ReactNode;
	}[];
	icon: ReactNode;
	accentColor: string;
}

export function PricingCard({
	title,
	description,
	price,
	priceId,
	features,
}: PricingCardProps) {
	return (
		<div
			className={cn(
				"rounded-3xl p-8 relative",
				"bg-card text-card-foreground shadow-sm border",
				title === "Pro Plan" && "border-primary"
			)}>
			{title === "Pro Plan" && (
				<div className='absolute -top-3 right-8 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full'>
					Most popular
				</div>
			)}
			<div className='mb-8'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-muted-foreground text-sm'>{description}</p>
			</div>

			<div className='mb-8'>
				<div className='flex items-end gap-1'>
					<span className='text-5xl font-semibold'>${price}</span>
					<span className='text-muted-foreground mb-1'>/per month</span>
				</div>
			</div>

			<Link
				href={`/checkout?id=${priceId}`}
				className={cn(
					"block w-full py-3 px-4 rounded-lg text-center mb-8 transition-colors",
					title === "Pro Plan"
						? "bg-primary text-primary-foreground hover:bg-primary/90"
						: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
				)}>
				Get started
			</Link>

			<ul className='space-y-4'>
				{features.map((feature, index) => (
					<li key={index} className='flex items-start gap-3'>
						<span className='text-muted-foreground'>{feature.icon}</span>
						<span className='text-muted-foreground text-sm'>
							{feature.text}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
