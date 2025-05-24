import { ClassNameValue, twMerge } from 'tailwind-merge';

export const cn = (...args: ClassNameValue[]) => twMerge(...args);