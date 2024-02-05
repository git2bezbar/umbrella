import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const conditionalClassnames = 
      type === "file" 
      ? ""
      : type === "color" 
        ? "absolute bottom-0 right-0 opacity-0"
        : "rounded-ui border border-black/10 bg-white";

    return (
      <input
        type={type}
        className={cn(
          "flex w-full px-4 py-3 text-sm ring-offset-white file:border-0 file:font-bold file:bg-primary file:text-white file:px-8 file:py-3 file:font-raleway file:rounded-ui file:mr-4 file:cursor-pointer file:disabled:cursor-not-allowed placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          conditionalClassnames,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
