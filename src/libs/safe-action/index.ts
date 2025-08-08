import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import * as z from "zod";
import { auth } from "@/libs/auth";
import { logger } from "@/libs/logger";

class ActionError extends Error {}

/**
 * Create a safe action client to use server actions.
 */
export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof ActionError) {
      return e?.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
  // Here we define a metadata type to be used in `metadata` instance method.
  defineMetadataSchema() {
    return z.object({
      name: z.string().trim(),
    });
  },
});

export const authUserActionClient = actionClient.use(async ({ next, clientInput, metadata }) => {
  const session = await auth();
  const result = await next({
    ctx: {
      user: session?.user ?? null,
    },
  });

  const startTime = performance.now();
  const endTime = performance.now();

  if (process.env.NODE_ENV === "development") {
    logger("Metadata ->", metadata);
    logger("Client Input ->", clientInput);
    logger("Result ->", result.data);
    logger("Action execution took", endTime - startTime, "ms");
  }

  return result;
});

export const authRequiredActionClient = actionClient
  .use(async ({ next, clientInput, metadata }) => {
    const result = await next();

    const startTime = performance.now();
    const endTime = performance.now();

    if (process.env.NODE_ENV === "development") {
      logger("Metadata ->", metadata);
      logger("Client Input ->", clientInput);
      logger("Result ->", result.data);
      logger("Action execution took", endTime - startTime, "ms");
    }

    return result;
  })
  .use(async ({ next }) => {
    const session = await auth();

    if (!session) {
      throw new ActionError("Unauthorized");
    }

    return next({
      ctx: {
        user: session.user,
      },
    });
  });
