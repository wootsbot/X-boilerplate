"use client";

import type * as React from "react";

import { useAction } from "next-safe-action/hooks";

import { stripeCheckoutAction } from "#/state/actions/payments/stripe";
import type { StripeCheckoutPriceSchema } from "#/state/actions/payments/stripe/schema";

import Button from "@design-system/button/Button";
import * as Icons from "@design-system/icons";

export function PriceButton({
	children,
	priceId,
	priceType,
	trialPeriodDays,
	...props
}: {
	children: React.ReactNode;
	priceId?: string;
	priceType?: string;
	trialPeriodDays?: number | null;
}) {
	const stripeCheckout = useAction(stripeCheckoutAction);
	const type = priceType as StripeCheckoutPriceSchema["priceType"];

	return (
		<Button
			endIcon={<Icons.ArrowRightIcon size={16} color="#fff" />}
			loading={stripeCheckout.isPending}
			onClick={() => {
				stripeCheckout.execute({ priceId, priceType: type, trialPeriodDays });
			}}
			{...props}
		>
			{children}
		</Button>
	);
}
