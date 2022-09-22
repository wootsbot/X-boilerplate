import { createDogStateSelector } from './dog.machine';

/** Selectors */
export const selectorGetDog = createDogStateSelector((state) => state.context.getDog.data);

export const selectorGetDogLoading = createDogStateSelector((state) => state.matches('getDog.loading'));

export const selectorGetDogStart = createDogStateSelector((state) => state.matches('getDog.idle'));

export const selectorGetDogLoaded = createDogStateSelector((state) => state.matches('getDog.loaded'));

export const selectorGetDogFailure = createDogStateSelector((state) => state.matches('getDog.failure'));
