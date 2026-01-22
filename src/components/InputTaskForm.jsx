import Button from "./Button"
import Field from "./Field"

const InputTaskForm = ({ addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
    setNewTaskTitle('')
    newTaskInputRef.current.focus()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="field"
        id="new-task"
        label="New task"
        type="text"
        value={newTaskTitle}
        onInput={event => setNewTaskTitle(event.target.value)}
        inputRef={newTaskInputRef}
      />
      <Button className="button" type="submit">Add</Button>
    </form>
  )
}

export default InputTaskForm
