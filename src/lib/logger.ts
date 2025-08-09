/** biome-ignore-all lint/suspicious/noConsole: <only debug> */
export const logger = (message: string, params?: unknown, ...rest: unknown[]) => {
  console.log(message, params, ...rest);
};
