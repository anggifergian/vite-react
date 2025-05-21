import { ReactNode } from "react";

export function Button({
  children,
  ...props
}: React.ComponentProps<"button"> & { children: ReactNode }) {
  return (
    <button
      className="h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border bg-blue-500 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
