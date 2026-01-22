import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext.jsx";

const TodoInfo = () => {
  const { tasks, onDeleteAllTasks } = useContext(TaskContext);
  const total = tasks.length;
  const hasTasks = total > 0;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Total tasks: {total}</div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={onDeleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoInfo;