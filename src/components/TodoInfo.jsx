const TodoInfo = ({ total = 0 }) => {
  const hasTasks = total > 0
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Total tasks: {total}</div>
      {hasTasks && (<button className="todo__delete-all-button" type="button">Delete all</button>)}
    </div>
  )
}

export default TodoInfo
