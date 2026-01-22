import Todo from "./components/Todo";
import { TaskProvider } from "./TaskContext/TaskContext.jsx";

const App = () => {
  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  );
};

export default App;
