import Field from "./Field";
import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext.jsx";

const SearchTaskForm = () => {
  const { filterTask } = useContext(TaskContext);
  return (
    <form className="todo__form">
      <Field
        className="todo__field field"
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => filterTask(event.target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;