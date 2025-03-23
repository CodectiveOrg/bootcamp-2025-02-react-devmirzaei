import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import style from "./Button.module.css";

type Variant = "solid" | "outlined";
type Size = "medium" | "large";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

function Button({
  children,
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        style.button,
        style[variant],
        style[size],
        style[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
