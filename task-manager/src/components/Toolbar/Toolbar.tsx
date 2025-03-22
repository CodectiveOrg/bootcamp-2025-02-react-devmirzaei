import { ReactNode } from "react";

function Toolbar(): ReactNode {
  return (
    <div className="toolbar">
      <input type="text" />
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
