import {
	PlusCircle,
	Globe,
	Users,
	CurrencyDollar,
	ChartLineUp,
	LockKey,
	Lightning,
	Star,
	Rocket,
} from "@phosphor-icons/react/dist/ssr";
import { PricingCardProps } from "../components/pricing-card";

export const PLAN_LOOKUP_KEYS = {
	BASIC: "plan_basic_monthly",
	PRO: "plan_pro_monthly",
	ENTERPRISE: "plan_enterprise_monthly",
} as const;

export const plans: PricingCardProps[] = [
	{
		title: "Basic Plan",
		description: "Essential features for small projects and startups.",
		price: 9,
		priceId: PLAN_LOOKUP_KEYS.BASIC,
		icon: <Rocket className='w-6 h-6 text-primary' weight='duotone' />,
		accentColor: "text-emerald-500",
		features: [
			{
				icon: <Users className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>5</span> Authorized Users
					</>
				),
			},
			{
				icon: <Globe className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>10</span> Currencies
					</>
				),
			},
			{
				icon: <CurrencyDollar className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>5,000</span> Transactions
					</>
				),
			},
			{
				icon: <ChartLineUp className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>1,000</span> Account Limit
					</>
				),
			},
			{
				icon: <PlusCircle className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>25</span> Investment Portfolios
					</>
				),
			},
			{
				icon: <LockKey className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Enhanced</span> Security
					</>
				),
			},
		],
	},
	{
		title: "Pro Plan",
		description: "Ideal for small businesses and growing teams.",
		priceId: PLAN_LOOKUP_KEYS.PRO,
		price: 29,
		icon: <Lightning className='w-6 h-6 text-primary' weight='duotone' />,
		accentColor: "text-blue-500",
		features: [
			{
				icon: <Users className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>10</span> Authorized Users
					</>
				),
			},
			{
				icon: <Globe className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>20</span> Currencies
					</>
				),
			},
			{
				icon: <CurrencyDollar className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>10,000</span> Transactions
					</>
				),
			},
			{
				icon: <ChartLineUp className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Unlimited</span> Account Limit
					</>
				),
			},
			{
				icon: <PlusCircle className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>50</span> Investment Portfolios
					</>
				),
			},
			{
				icon: <LockKey className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Advanced</span> Security Features
					</>
				),
			},
		],
	},
	{
		title: "Enterprise Plan",
		description: "For large organizations with complex needs.",
		priceId: PLAN_LOOKUP_KEYS.ENTERPRISE,
		price: 99,
		icon: <Star className='w-6 h-6 text-primary' weight='duotone' />,
		accentColor: "text-purple-500",
		features: [
			{
				icon: <Users className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Unlimited</span> Users
					</>
				),
			},
			{
				icon: <Globe className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>All</span> Currencies
					</>
				),
			},
			{
				icon: <CurrencyDollar className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Unlimited</span> Transactions
					</>
				),
			},
			{
				icon: <ChartLineUp className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Unlimited</span> Accounts
					</>
				),
			},
			{
				icon: <PlusCircle className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Custom</span> Investment Solutions
					</>
				),
			},
			{
				icon: <LockKey className='w-5 h-5 text-default-foreground/60' />,
				text: (
					<>
						<span className='font-medium'>Enterprise-grade</span> Security
					</>
				),
			},
		],
	},
];
