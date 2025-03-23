import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import { SelectOption } from "../../types/select-option.ts";

import style from "./Select.module.css";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
  variant?: "solid" | "outlined";
};

function Select({
  options,
  variant = "solid",
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(style.select, style[variant])}>
      <select {...otherProps}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
