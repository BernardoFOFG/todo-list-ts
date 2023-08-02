/* eslint-disable react-hooks/exhaustive-deps */
import { FiTrash2 } from "react-icons/fi";
import { RadioButton } from "./RadioButton";
import { TasksComponentProps } from "../types";
import { useEffect, useState } from "react";

export const Task = ({
  task,
  handleCompletedTask,
  onDelete,
}: TasksComponentProps) => {
  const { isCompleted, title } = task;
  const [completed, setCompleted] = useState(isCompleted);

  function handleDeleteTask() {
    onDelete(task);
  }

  useEffect(() => {
    handleCompletedTask({ ...task, isCompleted: completed });
  }, [completed]);

  return (
    <li className="flex justify-between gap-3 bg-gray-500 border-[1px] border-gray-400 p-4 w-full rounded-lg text-gray-100 break-all ">
      <RadioButton completed={completed} setCompleted={setCompleted} />
      <p className={`${completed ? "line-through text-gray-300" : ""}`}>{title}</p>
      <button onClick={handleDeleteTask} className="text-gray-300 hover:text-danger">
        <FiTrash2 size={20} />
      </button>
    </li>
  );
};
