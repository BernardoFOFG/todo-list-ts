import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { AddNewTask } from "../components/AddNewTask";
import { HeaderList } from "../components/HeaderList";
import { NoTaskMessage } from "../components/NoTaskMessage";
import { TaskList } from "../components/TaskList";
import { TaskProps } from "../types";
import Task from "../core/Task";
import { Header } from "../components/Header";
import { ModalDelete } from "../components/ModalDelete";

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToBeDeleted, setTaskToBeDeleted] = useState<TaskProps>();
  const [textNewTask, setTextNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter((task) => task.isCompleted).length
  );

  function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
    setTextNewTask(e.target.value);
  }

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    setTasks((prev) => [...prev, new Task(textNewTask)]);
    setTextNewTask("");
  }

  function handleCompletedTask(taskSelected: TaskProps) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskSelected.id) {
          return taskSelected;
        }
        return task;
      })
    );
  }

  function handleDeleteTask(task: TaskProps) {
    setModalOpen(true);
    setTaskToBeDeleted(task);
  }

  function onCloseModal() {
    setModalOpen(false);
  }
  function onDeleteTask() {
    setTasks((prev) => prev.filter((task) => task.id !== taskToBeDeleted!.id));
  }

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.isCompleted).length);
  }, [tasks]);

  const totalTasks = tasks.length;
  const hasTasks = totalTasks > 0;

  return (
    <>
      <Header />

      <section className="flex flex-col justify-center mx-auto my-0 gap-16 base:w-[300px] xsm:w-[400px] md:w-[768px] lg:w-[1000px] xl:w-[1440px] ">
        <AddNewTask
          onChange={handleChangeTask}
          inputValue={textNewTask}
          addTask={handleAddNewTask}
        />
        <HeaderList totalTasks={totalTasks} completedTasks={completedTasks} />
        {hasTasks ? (
          <TaskList
            tasks={tasks}
            handleCompletedTask={handleCompletedTask}
            onDelete={handleDeleteTask}
          />
        ) : (
          <NoTaskMessage />
        )}
      </section>

      {modalOpen && (
        <ModalDelete onClose={onCloseModal} onDelete={onDeleteTask} />
      )}
    </>
  );
};
