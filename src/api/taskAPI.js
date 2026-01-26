import tasks from "../hooks/useTasks"
const URL = "http://localhost:3001/tasks";

const taskAPI = {
  getTasks: () => {
    return fetch(URL)
      .then((response) => response.json())
  },
  addTask: (task) => {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((response) => response.json());
  },
  deleteTask: (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Failed to delete task on server:", response.status, response.statusText);
      }
    });
  },
  toggleTask: (id, isDone) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !isDone }),
    })
  },

  deleteAllTasks: (tasks) => {
    return Promise.all(
      tasks.map((task) =>
        fetch(`${URL}/${task.id}`, { method: "DELETE" }),
      ),
    )
  },
}
export default taskAPI
