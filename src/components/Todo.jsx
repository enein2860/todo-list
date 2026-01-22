import { TaskContext } from "../TaskContext/TaskContext.jsx";
import { useContext } from "react";
import InputTaskForm from "./InputTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import Button from "./Button.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TaskContext);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <InputTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        className="button"
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        Show first incompleted task
      </Button>
      <TodoList />
    </div>
  );
};

export default Todo;
