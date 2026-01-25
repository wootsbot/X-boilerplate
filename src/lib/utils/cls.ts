import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cls(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
