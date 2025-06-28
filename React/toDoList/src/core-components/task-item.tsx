import Card from "../components/card";
import Text from "../components/text";
import InputCheckbox from "../components/input-checkbox";
import ButtonIcon from "../components/button-icon";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import React from "react";
import InputText from "../components/input-text";
import type { Task } from "../modules/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "Creating");

  const [taskTitle, setTaskTitle] = React.useState("");

  const { updateTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ id: task.id, title: taskTitle });
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  return (
    <>
      <Card size={"md"}>
        {!isEditing ? (
          <div className="flex items-center gap-4">
            <InputCheckbox
              value={task?.concluded?.toString()}
              checked={task?.concluded}
            />
            <Text
              className={cx("flex-1", {
                "line-through": task?.concluded,
              })}
            >
              {task?.title}
            </Text>
            ''
            <div className="flex gap-1">
              <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
              <ButtonIcon
                icon={PencilIcon}
                variant={"tertiary"}
                onClick={handleEditTask}
              />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText
              className="flex-1"
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex gap-1">
              <ButtonIcon
                icon={XIcon}
                variant={"secondary"}
                onClick={handleExitEditTask}
              />
              <ButtonIcon type="submit" icon={CheckIcon} variant={"primary"} />
            </div>
          </form>
        )}
      </Card>
    </>
  );
}
