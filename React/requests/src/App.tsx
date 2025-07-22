import UserInfo from "./components/user-info";
import UserNewForm from "./components/user-new";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./components/users-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
      <hr />
      <UserNewForm />
      <hr />
      <UserList />
    </QueryClientProvider>
  );
}

export default App;
