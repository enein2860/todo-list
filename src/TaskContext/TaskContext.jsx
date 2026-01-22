import { createContext, useEffect, useRef, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("");
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  });

  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (newTaskInputRef.current) {
      newTaskInputRef.current.focus();
    }
  }, []);

  const firstIncompleteTaskId = tasks.find((task) => task.isDone === false)?.id;

  const onDeleteAllTasks = () => {
    setTasks([]);
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const filterTask = (query) => {
    setFilter(query);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase()),
  );

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
