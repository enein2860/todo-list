import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext.jsx";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    filteredTasks: tasks,
    deleteTask: onDeleteTask,
    toggleTask: onToggleTask,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="todo__empty-list">
        <p className="todo__empty-list-description">No tasks to show.</p>
      </div>
    );
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo-item"
          key={task.id}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          ref={
            task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null
          }
          {...task}
        />
      ))}
    </ul>
  );
};

export default TodoList;