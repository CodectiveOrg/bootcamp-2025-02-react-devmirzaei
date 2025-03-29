import { ReactNode } from "react";

import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import style from "./Create.module.css";

function Create(): ReactNode {
  return (
    <div className={style.create}>
      <Button color="primary" shape="circle" size="large">
        <MingcuteAddLine />
      </Button>
    </div>
  );
}

export default Create;
