import { TasksListProps } from "../types";
import { Task } from "./Task";

export const TaskList = ({
  tasks,
  handleCompletedTask,
  onDelete,
}: TasksListProps) => {
  return (
    <ul className="flex flex-col gap-4 overflow-y-auto max-h-[500px] py-4 px-2 transition-all ">
      {!!tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleCompletedTask={handleCompletedTask}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
};
