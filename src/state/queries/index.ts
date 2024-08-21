export const STALE = {
  SECONDS: {
    /**
     * 15 seconds
     */
    FIFTEEN: 1e3 * 15,
    /**
     * 30 seconds
     */
    THIRTY: 1e3 * 30,
  },
  MINUTES: {
    /**
     * 1 minute
     */
    ONE: 1e3 * 60,
    /**
     * 5 minutes
     */
    FIVE: 1e3 * 60 * 5,
  },
  HOURS: {
    /**
     * 1 hour
     */
    ONE: 1e3 * 60 * 60,
  },
  /**
   * 1 day
   */
  INFINITY: Infinity,
} as const;
