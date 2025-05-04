import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//coonvert prisma object into regular js obj

export function ConvertToJSObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value, (key, val) => {
    if (typeof val === 'object' && val !== null) {
      if ('toNumber' in val) {
        return val.toNumber(); // Convert Decimal to number
      }
      if ('toFixed' in val) {
        return Number(val.toString()); // Alternative Decimal conversion
      }
    }
    return val;
  }));
}


// formate number with decimal place
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

export const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places (e.g., 49.99)'
  );