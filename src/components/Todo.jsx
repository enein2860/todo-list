import InputTaskForm from "./InputTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <InputTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  )
}

export default Todo
