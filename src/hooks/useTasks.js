import { useState, useEffect, useRef } from "react";
import taskAPI from "../api/taskAPI";

const useTasks = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("");
  const [tasks, setTasks] = useState([]);

  const newTaskInputRef = useRef(null);

  useEffect(() => {
    newTaskInputRef.current.focus();
    taskAPI.getTasks().then(setTasks);
  }, []);

  const onDeleteAllTasks = () => {
    taskAPI.deleteAllTasks(tasks).then(() => setTasks([]));
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      taskAPI.addTask(newTask).then((addedTask) => {
        setTasks([...tasks, addedTask]);
      });
    }
  };

  const deleteTask = (id) => {
    taskAPI.deleteTask(id).then(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    });
  };

  const toggleTask = (id, isDone) => {
    taskAPI.toggleTask(id, isDone).then(() => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task,
        ),
      );
    });
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
