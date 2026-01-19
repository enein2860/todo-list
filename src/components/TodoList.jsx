import TodoItem from "./TodoItem"

const TodoList = () => {
  return (
    <ul className="todo__list">
      <TodoItem className={"todo-item"} id="task-1" title="soslo" />
      <TodoItem className={"todo-item"} id="task-2" title="sosla" />
      <div className="todo__empty-message"></div>

    </ul>
  )
}

export default TodoList
