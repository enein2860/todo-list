import Field from "./Field"

const SearchTaskForm = () => {
  return (<form className="todo__form">
    <Field className="todo__field field" id="search-task" label="Search task" type="Search" />
  </form>)
}

export default SearchTaskForm
