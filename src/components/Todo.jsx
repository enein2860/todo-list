import { useState, useEffect, useRef } from 'react'
import InputTaskForm from "./InputTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"


const Todo = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [filter, setFilter] = useState('')
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  })

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])


  const firstIncompleteTaskId = tasks.find(task => task.isDone === false)?.id

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
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm onSearch={filterTask} />
      <TodoInfo total={tasks.length} onDeleteAllTasks={onDeleteAllTasks} />
      <Button className="button" type="button" onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Show first incompleted task</Button>
      <TodoList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} firstIncompleteTaskId={firstIncompleteTaskId} firstIncompleteTaskRef={firstIncompleteTaskRef} />
    </div>
  )
}
export default Todo
