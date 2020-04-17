import { thunk } from "easy-peasy"
import { AppActions } from "./actions.model"

export default {
  fetchTodos: thunk<AppActions>(async (actions) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
    )
    const todos = await res.json()
    actions.setTodos(todos)
  }),
}
