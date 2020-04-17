import { action } from "easy-peasy"
import { StoreState } from "./state.model"

const actions = {
  decrease: action<StoreState>((state) => {
    state.counter--
  }),
  add: action<StoreState>((state) => {
    state.counter++
  }),
  setTodos: action<StoreState>((state, todos = []) => {
    state.todos = todos
  }),
}

export default actions
