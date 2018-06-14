export const init = {
  text: '',
  items: []
}

export const type = {
  TODO_TEXT_CHANGE: 'TODO_TEXT_CHANGE',
  TODO_ADD: 'TODO_ADD',
  TODO_DEL: 'TODO_DEL'
}
export const addTodo = () => {
  return {
    type: type.TODO_ADD
  }
}
export const changeTodoText = (text) => {
  return {
    type: type.TODO_TEXT_CHANGE,
    payload: text
  }
}
export const delTodoById = (id) => {
  return {
    type: type.TODO_DEL,
    payload: id
  }
}

const todoReducer = (state = init, action) => {
  switch (action.type) {
    case type.TODO_ADD:
      return {
        text:'',
        items: [...state.items, state.text]
      }
    case type.TODO_TEXT_CHANGE:
      return {
        ...state,
        text: action.payload
      }
    case type.TODO_DEL:
      let items = JSON.parse(JSON.stringify(state.items))
      items.splice(action.payload, 1)
      return {
        ...state,
        items
      }
    default:
      return state
  }
}

export default todoReducer