import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, id, ...props }, ref) => {
        const inputId = id || React.useId();

        return (
            <div className="relative w-full">
                <input
                    type={type}
                    className={cn(
                        "peer flex h-12 w-full rounded-md border border-surface-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    id={inputId}
                    placeholder={label}
                    {...props}
                />
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn(
                            "absolute right-2 top-3 z-10 origin-[100%_0] -translate-y-5 scale-75 transform bg-white px-1 text-sm text-surface-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-primary-600 rtl:origin-[100%_0]",
                            error && "text-red-500 peer-focus:text-red-500"
                        )}
                    >
                        {label}
                    </label>
                )}
                {error && (
                    <p className="mt-1 text-xs text-red-500">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
