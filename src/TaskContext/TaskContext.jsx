import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    newTaskInputRef,
    filterTask,
    filteredTasks,
    onDeleteAllTasks,
    setNewTaskTitle,
    newTaskTitle,
  } = useTasks();

  const {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useIncompleteTaskScroll(tasks);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        newTaskInputRef,
        filterTask,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        onDeleteAllTasks,
        setNewTaskTitle,
        newTaskTitle,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
