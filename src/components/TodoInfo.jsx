const TodoInfo = ({ total = 1, onDeleteAllTasks }) => {
  const hasTasks = total > 0
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Total tasks: {total}</div>
      {hasTasks && (<button className="todo__delete-all-button" type="button" onClick={onDeleteAllTasks}>Delete all</button>)}
    </div>
  )
}

export default TodoInfo
