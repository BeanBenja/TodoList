const init = {
  text: '',
  items: []
}
const type = {
  TODO_TEXT_CHANGE: 'TODO_TEXT_CHANGE',
  TODO_ADD: 'TODO_ADD',
  TODO_DEL: 'TODO_DEL'
}

// action
export const addTodo = () => ({
  type: type.TODO_ADD
})

export const changeTodoText = (text) => ({
  type: type.TODO_TEXT_CHANGE,
  payload: text
})

export const delTodo = (id) => ({
  type: type.TODO_DEL,
  payload: id
})

// reducer
const todoReducer = (state = init, action) => {
  switch (action.type) {
    case type.TODO_ADD:
      return {
        text: '',
        items: [...state.items, state.text]
      }
    case type.TODO_TEXT_CHANGE:
      return {
        ...state,
        text: action.payload
      }
    case type.TODO_DEL:
      const item = state.items
      item.splice(action.payload, 1)
      return {
        items:[
          ...state,
          ...state.items.splice(item)
        ]
      }
    default:
      return state

  }
}
export default todoReducer