import { useState, useEffect, useRef } from "react";
import useTasksLocalStorage from "./useTasksLocalStorage";

const useTasks = () => {
  const { saveTasks, savedTasks } = useTasksLocalStorage();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("");
  const [tasks, setTasks] = useState(() => {
    return savedTasks ?? [];
  });

  const newTaskInputRef = useRef(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (newTaskInputRef.current) {
      newTaskInputRef.current.focus();
    }
  }, []);


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

  return {
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
  };

};

export default useTasks;
