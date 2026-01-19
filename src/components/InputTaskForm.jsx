import Button from "./Button"
import Field from "./Field"

const InputTaskForm = () => {
  return (
    <form className="todo__form">
      <Field className="field" id="new-task" label="New task" type="text" />
      <Button className="button" type="submit">Add</Button>
    </form>
  )
}

export default InputTaskForm
