import { ComponentProps, ReactNode } from "react";

import style from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactNode;
};

function TextInput({ suffixIcon, ...otherProps }: Props): ReactNode {
  return (
    <div className={style["text-input"]}>
      <input type="text" {...otherProps} />
      {suffixIcon && <div className={style.suffix}>{suffixIcon}</div>}
    </div>
  );
}

export default TextInput;
