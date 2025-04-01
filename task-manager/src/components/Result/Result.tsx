import { ReactNode } from "react";

import { Task } from "../../types/Task.ts";

import Button from "../Button/Button.tsx";

import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";

import style from "./Result.module.css";

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
    <div className={style.result}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className={style.title}>{task.title}</div>
            <div className={style.actions}>
              <Button
                color="primary"
                variant="ghost"
                size="small"
                shape="square"
              >
                <MingcuteEdit2Line />
              </Button>
              <Button
                color="danger"
                variant="ghost"
                size="small"
                shape="square"
              >
                <MingcuteDelete2Line />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
