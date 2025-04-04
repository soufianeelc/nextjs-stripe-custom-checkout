import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function CheckoutFormSkeleton() {
	return (
		<div className='space-y-4 w-full max-w-md mx-auto'>
			{/* Cardholder name */}
			<Skeleton className='bg-muted rounded-md opacity-40 h-10 w-full' />

			{/* Email */}
			<Skeleton className='bg-muted rouned opacity-40 h-10 w-full' />

			{/* Payment method selection */}
			<div className='flex space-x-2'>
				<Skeleton className='bg-muted rouned opacity-40 h-10 w-24' />
				<Skeleton className='bg-muted rouned opacity-40 h-10 w-24' />
				<Skeleton className='bg-muted rouned opacity-40 h-10 w-24' />
			</div>

			{/* Secure checkout message */}
			<div className='flex items-center space-x-2'>
				<Skeleton className='bg-muted rouned opacity-40 h-4 w-4' />
				<Skeleton className='bg-muted rouned opacity-40 h-4 w-48' />
			</div>

			{/* Card number */}
			<Skeleton className='bg-muted rouned opacity-40 h-10 w-full' />

			{/* Expiration and CVC */}
			<div className='flex space-x-4'>
				<Skeleton className='bg-muted rouned opacity-40 h-10 w-1/2' />
				<Skeleton className='bg-muted rouned opacity-40 h-10 w-1/2' />
			</div>

			{/* Country */}
			<Skeleton className='bg-muted rouned opacity-40 h-10 w-full' />

			{/* Submit button */}
			<Skeleton className='bg-muted rouned opacity-40 h-12 w-full' />
		</div>
	);
}

export { CheckoutFormSkeleton };
