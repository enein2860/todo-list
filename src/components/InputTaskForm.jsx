import Button from "./Button"
import Field from "./Field"

const InputTaskForm = ({ addTask, newTaskTitle, setNewTaskTitle }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
    setNewTaskTitle('')
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
      />
      <Button className="button" type="submit">Add</Button>
    </form>
  )
}

export default InputTaskForm
