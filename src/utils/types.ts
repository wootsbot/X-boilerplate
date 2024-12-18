import type { NextPage } from "next";
import type * as React from "react";

export type NextPageLayout = NextPage & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
	auth?: boolean;
};

export type Nullable<T> = T | null;
