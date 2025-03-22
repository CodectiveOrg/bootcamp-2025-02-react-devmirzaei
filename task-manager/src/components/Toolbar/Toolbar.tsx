import { ReactNode } from "react";
import TextInput from "../TextInput/TextInput.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

function Toolbar(): ReactNode {
  return (
    <div className="toolbar">
      <TextInput
        placeholder="Search tasks..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <select name="priority">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button>Dark</button>
    </div>
  );
}

export default Toolbar;
