import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import style from "./DateInput.module.css";

type Props = ComponentProps<"input">;

function DateInput({ className, ...otherProps }: Props): ReactNode {
  return (
    <div className={clsx(style["date-input"], className)}>
      <input type="date" {...otherProps} />
    </div>
  );
}

export default DateInput;
