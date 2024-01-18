import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatCounter(counter: number): {
  value: string | number;
  color: string;
} {
  const absCounter = Math.abs(counter);
  const value =
    absCounter >= 10000
      ? (absCounter / 1000).toFixed(0) + "K"
      : absCounter.toString();
  const color =
    counter < 0 ? "text-[rgb(220,65,76)]" : "text-[rgb(29,180,137)]"; // Indikator warna merah untuk nilai negatif

  return { value, color };
}
export function capitalizeFirstLetter(arr: string[]) {
  return arr
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
