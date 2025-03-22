import { ReactNode } from "react";
import { Task } from "../types/Task.ts";

const tasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for task 1",
    date: new Date(),
    priority: "high",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for task 2",
    date: new Date(),
    priority: "low",
  },
];

function Result(): ReactNode {
  return (
    <div className="result">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
