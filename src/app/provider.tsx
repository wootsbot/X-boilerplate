"use client";

import "@/libs/axios/config";

import type * as React from "react";

import { Toaster } from "@design-system/toast";

import { ReactQueryClientProvider } from "@/libs/react-query";

import { WelcomeToast } from "@/components/welcome-toast";

export const Provider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<ReactQueryClientProvider>
			{children}
			<Toaster position="top-center" offset={10} />
			<WelcomeToast />
		</ReactQueryClientProvider>
	);
};
