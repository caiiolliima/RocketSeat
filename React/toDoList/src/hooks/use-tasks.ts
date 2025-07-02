import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../modules/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdtasksCount: tasks.filter((task) => task.state === "Created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
