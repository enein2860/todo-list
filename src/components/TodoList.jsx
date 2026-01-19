import TodoItem from "./TodoItem"

const TodoList = ({ tasks = [], onDeleteTask, onToggleTask }) => {
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo-item"
          key={task.id}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList
