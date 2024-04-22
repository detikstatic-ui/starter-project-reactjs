import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Local storage
export const fetchData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

// Delete item from local storage
export const deleteItem = ({ key, id }: { key: string; id?: string }): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const existingData = fetchData<any[]>(key)

  if (id) {
    const newData = existingData?.filter((item) => item.id !== id) || []
    localStorage.setItem(key, JSON.stringify(newData))
  } else {
    localStorage.removeItem(key)
  }
}
