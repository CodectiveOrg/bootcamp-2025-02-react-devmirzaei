import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import style from "./Button.module.css";

type Color = "primary" | "danger";
type Variant = "solid" | "outlined" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

function Button({
  children,
  color = "primary",
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
        style[color],
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
