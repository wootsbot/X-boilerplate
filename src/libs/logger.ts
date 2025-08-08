export const logger = (message: string, params?: unknown, ...rest: unknown[]) => {
	// biome-ignore lint/suspicious/noConsoleLog: <explanation>
	console.log(message, params, ...rest);
};
