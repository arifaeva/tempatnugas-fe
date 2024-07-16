import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "bg-slate-50 text-slate-800 font-medium tracking-tight rounded-lg px-4 py-2",
  variants: {
    variant: {
      primary: "bg-blue-900 text-orange-300",
      secondary: "bg-orange-400 text-blue-900",
      tertiary: "bg-amber-400 text-blue-900",
      quartenary: "bg-neutral-300 text-blue-900",
      outline: "bg-transparent border border-slate-0 text-blue-900",
      ghost: "bg-transparent text-blue-900",
    },
    size: {
      sm: "px-2.5 py-1.5 text-sm",
      md: "px-3.5 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type TButton = VariantProps<typeof style>;

interface Props extends TButton, React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
