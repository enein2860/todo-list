import { useState } from 'react'
import InputTaskForm from "./InputTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"


const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'task 1', isDone: false },
    { id: 2, title: 'task 2', isDone: false },
    { id: 3, title: 'task 3', isDone: false },
    { id: 4, title: 'task 4', isDone: false },
    { id: 5, title: 'task 5', isDone: false },
    { id: 6, title: 'task 6', isDone: false },
    { id: 7, title: 'task 7', isDone: false },
    { id: 8, title: 'task 8', isDone: false },
    { id: 9, title: 'task 9', isDone: false },
    { id: 10, title: 'task 10', isDone: false },
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [filter, setFilter] = useState('')

  const onDeleteAllTasks = () => {
    setTasks([])
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask])
    }
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ))
  }

  const filterTask = (query) => {
    setFilter(query)
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <InputTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearch={filterTask} />
      <TodoInfo total={tasks.length} onDeleteAllTasks={onDeleteAllTasks} />
      <TodoList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
    </div>
  )
}
export default Todo
