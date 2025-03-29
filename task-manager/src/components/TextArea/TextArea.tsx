import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import style from "./TextArea.module.css";

type Props = ComponentProps<"textarea">;

function TextArea({ className, ...otherProps }: Props): ReactNode {
  return (
    <textarea
      rows={3}
      className={clsx(style["text-area"], className)}
      {...otherProps}
    ></textarea>
  );
}

export default TextArea;
