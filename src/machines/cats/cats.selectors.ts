import { createCatsStateSelector } from "./cats.machine";

/** Selectors */
export const selectorGetCats = createCatsStateSelector(
  (state) => state.context.getCats.data
);

export const selectorGetCatsLoading = createCatsStateSelector((state) =>
  state.matches("getCats.loading")
);

export const selectorGetCatsStart = createCatsStateSelector((state) =>
  state.matches("getCats.start")
);

export const selectorGetCatsLoaded = createCatsStateSelector((state) =>
  state.matches("getCats.loaded")
);

export const selectorGetCatsFailure = createCatsStateSelector((state) =>
  state.matches("getCats.failure")
);
