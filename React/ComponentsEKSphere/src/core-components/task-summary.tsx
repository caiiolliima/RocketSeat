import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TaskesSummary() {
  const { createdtasksCount, concludedTasksCount, isLoadingTasks } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className={"!text-white"}>
          Tarefas Criadas
        </Text>
        <Badge variant={"secondary"} loading={isLoadingTasks}>
          {createdtasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className={"!text-white"}>
          Concluídas
        </Text>
        <Badge variant={"primary"} loading={isLoadingTasks}>
          {concludedTasksCount} de {createdtasksCount}
        </Badge>
      </div>
    </>
  );
}
