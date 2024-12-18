import type EN from "./messages/en.json";

type Messages = typeof EN;

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
