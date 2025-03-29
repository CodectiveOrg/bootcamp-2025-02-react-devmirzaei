import { ReactNode, useRef } from "react";

import Button from "../Button/Button.tsx";
import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import style from "./Create.module.css";

function Create(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  return (
    <div className={style.create}>
      <Button
        color="primary"
        shape="circle"
        size="large"
        onClick={addButtonClickHandler}
      >
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <div className={style.content}>
          <div className={style.title}>Create New Task</div>
          <TextInput placeholder="Enter title of task ..." />
          <TextArea placeholder="Enter description of task ..." />
          <div className={style.actions}>
            <Button
              type="button"
              variant="outlined"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </Button>
            <Button>Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Create;
