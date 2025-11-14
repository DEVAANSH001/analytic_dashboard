import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//cn = class and name for conditional class 
// <button
// className={'text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} ${
// isRounded && "rounded-full"
// } p-4'}


// <button
// className={cn(
// "text-sm",
// disabled ? "bg-gray-300" : "bg-blue-500"
// isRounded && "rounded-full",
// "p-4"

// Hello
// </button>
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
