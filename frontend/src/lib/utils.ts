import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl = `https://crypto-convert-szaq.vercel.app`;

// for dev environment
// export const baseUrl = `http://localhost:5173`;
