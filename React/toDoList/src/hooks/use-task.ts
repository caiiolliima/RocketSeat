import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../modules/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdateingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: "Creating",
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdateingTask(true);
    await delay(1000);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: "Created", ...payload } : task
      )
    );
    setIsUpdateingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);

    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
