import Button from "./Button";
import Field from "./Field";
import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext.jsx";

const InputTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TaskContext);
  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
    setNewTaskTitle("");
    newTaskInputRef.current.focus();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="field"
        id="new-task"
        label="New task"
        type="text"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        inputRef={newTaskInputRef}
      />
      <Button className="button" type="submit">
        Add
      </Button>
    </form>
  );
};

export default InputTaskForm;
