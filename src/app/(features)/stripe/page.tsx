import { getStripePricesAction, getStripeProductsAction } from "@/state/actions/payments/stripe";

import * as Pricing from "@/components/pricing-card";
import { ToolsList } from "@/components/tools-list";
import type { Tool } from "@/components/tools-list";

import pkg from "~/pkg";

import { PriceButton } from "./price-button";

const TOOLS: Tool[] = [
	{ version: pkg.dependencies.stripe, name: "stripe", urlRef: "https://github.com/stripe/stripe-node" },
	{
		version: pkg.dependencies["@stripe/stripe-js"],
		name: "@stripe/stripe-js",
		urlRef: "https://stripe.com/docs/js",
	},
	{
		version: pkg.dependencies["framer-motion"],
		name: "framer-motion",
		urlRef: "https://github.com/framer/motion#readme",
	},
	{
		version: pkg.dependencies["next-safe-action"],
		name: "next-safe-action",
		urlRef: "https://github.com/TheEdoRan/next-safe-action#readme",
	},
	{
		version: pkg.dependencies.sonner,
		name: "sonner",
		urlRef: "https://sonner.emilkowal.ski/",
	},
	{
		version: pkg.dependencies.zod,
		name: "zod",
		urlRef: "https://zod.dev",
	},
];

export default async function StripePage() {
	const [products, prices] = await Promise.all([getStripeProductsAction(), getStripePricesAction()]);

	const startedPlan = products?.data?.find((product) => product.name === "started");
	const starredPrice = prices?.data?.find((price) => price.productId === startedPlan?.id);

	const teamPlan = products?.data?.find((product) => product.name === "team");
	const teamPrice = prices?.data?.find((price) => price.productId === teamPlan?.id);

	const proPlan = products?.data?.find((product) => product.name === "pro");
	const proPrice = prices?.data?.find((price) => price.productId === proPlan?.id);

	return (
		<div className="flex flex-col gap-16">
			<section className="px-6 py-12 rounded-md outline outline-1 outline-stone-400 bg-[url('/svg/grid_03.svg')] bg-cover bg-no-repeat">
				<div className="flex flex-col gap-20">
					<div className="flex flex-col gap-5 text-center">
						<h1 className="text-6xl">Find a plan to power your projects.</h1>
						<p className="text-lg">From early-stage startups to growing enterprises, X Boilerplate has you covered.</p>
					</div>

					<div className="max-w-4xl px-4 mx-4 sm:mx-auto">
						<div className="grid grid-cols-3 gap-6">
							<Pricing.PricingCard
								priceId={startedPlan?.id}
								title="Started"
								description={startedPlan?.description || ""}
								price={starredPrice?.unitAmount || 0}
								isOneTime
								textHelper="Get started with:"
								interval={starredPrice?.interval}
								features={[
									{ title: "Unlimited API requests" },
									{ title: "50,000 monthly active users" },
									{ title: "500 MB database space", description: "Shared CPU • 500 MB RAM" },
									{ title: "5 GB bandwidth" },
									{ title: "1 GB file storage" },
									{ title: "Community support" },
								]}
								submitButton={
									<PriceButton priceId={starredPrice?.id} priceType={starredPrice?.type} trialPeriodDays={0}>
										Start with Started
									</PriceButton>
								}
							/>

							<Pricing.PricingCard
								priceId={proPlan?.id}
								title="Pro"
								description={proPlan?.description || ""}
								price={proPrice?.unitAmount || 0}
								textHelper="Everything in the Started Plan, plus:"
								priceDescription="$10 in compute credits included"
								interval={proPrice?.interval}
								isPopular
								features={[
									{ title: `${proPrice?.trialPeriodDays ?? 7}-day free` },
									{ title: "100,000 monthly active users", description: "then $0.00325 per MAU" },
									{ title: "8 GB disk size per project", description: "then $0.125 per GB" },
									{ title: "250 GB bandwidth", description: "then $0.09 per GB" },
									{ title: "100 GB file storage", description: "then $0.021 per GB" },
									{ title: "Email support" },
									{ title: "Daily backups stored for 7 days" },
									{ title: "7-day log retention" },
								]}
								submitButton={
									<PriceButton
										priceId={proPrice?.id}
										priceType={proPrice?.type}
										trialPeriodDays={proPrice?.trialPeriodDays ?? 7}
									>
										Get Started
									</PriceButton>
								}
							/>

							<Pricing.PricingCard
								priceId={teamPlan?.id}
								title="Team"
								description={teamPlan?.description || ""}
								price={teamPrice?.unitAmount || 0}
								textHelper="Everything in the Pro Plan, plus:"
								priceDescription="$10 in compute credits included"
								interval={proPrice?.interval}
								features={[
									{ title: `${teamPrice?.trialPeriodDays ?? 15}-day free` },
									{ title: "SOC2" },
									{ title: "HIPAA available as paid add-on" },
									{ title: "Read-only and Billing member roles" },
									{ title: "SSO for Supabase Dashboard" },
									{ title: "Priority email support & SLAs" },
									{ title: "Daily backups stored for 14 days" },
									{ title: "28-day log retention" },
								]}
								submitButton={
									<PriceButton
										priceId={teamPrice?.id}
										priceType={teamPrice?.type}
										trialPeriodDays={teamPrice?.trialPeriodDays ?? 15}
									>
										Get Started
									</PriceButton>
								}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="flex flex-col gap-8">
					<div className="flex items-end gap-3">
						<h2 className="text-5xl font-medium">Tools</h2>
						<p className="text-sm font-thin">tools used in the development this example and its respective versions.</p>
					</div>

					<ToolsList list={TOOLS} />
				</div>
			</section>
		</div>
	);
}
