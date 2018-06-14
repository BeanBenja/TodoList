import React from 'react'
import Input from './Input'
import { connect } from 'react-redux'
import { addTodo, changeTodoText, delTodoById } from '../../reducers/todoReducer'

const App = ({items, text, handleAddTodo, handleChangeTodoText, handleDelTodo}) => {
  return (
    <div>
      <Input text={text} handleAddTodo={handleAddTodo} handleDelTodo={handleDelTodo}
             handleChangeTodoText={handleChangeTodoText}/>
      {
        items.map((value, index) =>
          <p key={index}>{value}
            <button onClick={() => handleDelTodo(index)}>del</button>
          </p>)
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.todos.text,
    items: state.todos.items
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    handleAddTodo: () =>  dispatch(addTodo()),
    handleChangeTodoText: (e) => dispatch(changeTodoText(e.target.value)),
    handleDelTodo: (id) => dispatch(delTodoById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)