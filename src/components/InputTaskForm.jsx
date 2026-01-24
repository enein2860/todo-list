import Button from "./Button";
import Field from "./Field";
import { useContext, useState } from "react";
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

  const [error, setError] = useState("");

  const onInput = (event) => {
    const value = event.target.value;

    const clearvalue = value.trim();

    const hasOnlySpaces = value.length > 0 && clearvalue.length === 0;

    if (hasOnlySpaces) {
      setError("Task cannot be empty");
    } else {
      setError("");
    }
    setNewTaskTitle(value);
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="field"
        id="new-task"
        label="New task"
        type="text"
        value={newTaskTitle}
        onInput={onInput}
        inputRef={newTaskInputRef}
        error={error}
      />
      <Button className="button" type="submit"
        isDisabled={newTaskTitle.trim().length === 0}>
        Add
      </Button>
    </form>
  );
};

export default InputTaskForm;
