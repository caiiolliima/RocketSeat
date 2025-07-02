import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TaskesSummary() {
  const { createdtasksCount, concludedTasksCount } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className={"!text-gray-300"}>
          Tarefas Criadas
        </Text>
        <Badge variant={"secondary"}>{createdtasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className={"!text-gray-300"}>
          Concluídas
        </Text>
        <Badge variant={"primary"}>
          {concludedTasksCount} de {createdtasksCount}
        </Badge>
      </div>
    </>
  );
}
