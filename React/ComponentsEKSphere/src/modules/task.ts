export const TASKS_KEY = "tasks";

//Necessário desabilitar o "erasableSyntaxOnly" dentro do tsconfig.app.json para utilizar o formato abaixo;
// export enum TaskState {
//   Creating = "creating",
//   Created = "created",
// }
//Mantém o código typescript mais robusto e não tem necessidade de desabilitar o "erasableSyntaxOnly"
export type TaskState = "Creating" | "Created";

export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
}
