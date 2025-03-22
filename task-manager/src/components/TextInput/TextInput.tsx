import { ReactNode } from "react";

import style from "./TextInput.module.css";

type Props = {
  placeholder: string;
  suffixIcon: ReactNode;
};

function TextInput({ placeholder, suffixIcon }: Props): ReactNode {
  return (
    <div className={style["text-input"]}>
      <input type="text" placeholder={placeholder} />
      <div className={style.suffix}>{suffixIcon}</div>
    </div>
  );
}

export default TextInput;
