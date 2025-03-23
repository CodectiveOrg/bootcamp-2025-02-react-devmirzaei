import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

import style from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  return (
    <div className={style.toolbar}>
      <TextInput
        placeholder="Search tasks..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        name="priority"
        options={[
          { value: "all", label: "All" },
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
        ]}
      />
      <Button>
        <MingcuteMoonLine />
      </Button>
    </div>
  );
}

export default Toolbar;
