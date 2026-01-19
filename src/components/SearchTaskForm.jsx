import Field from "./Field"

const SearchTaskForm = ({ onSearch }) => {
  return (<form className="todo__form">
    <Field className="todo__field field" id="search-task" label="Search task" type="Search" onInput={(event) => onSearch(event.target.value)} />
  </form>)
}

export default SearchTaskForm
