import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeTodoText, delTodo } from '../../reducers/todoReducer'
import { Input } from './Input'

const App = ({items, text, handleChange, handleAdd, handleDel}) => {
  return (
    <React.Fragment>
      <Input text={text} handleChange={handleChange} handleAdd={handleAdd}/>
      {
        items.map((value, index) => <p key={index} id={index}>
          {value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick={handleDel}>X</a>
        </p>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({todos}) => {
  return {
    text: todos.text,
    items: todos.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(changeTodoText(e.target.value)),
    handleAdd: () => dispatch(addTodo()),
    handleDel: () => dispatch(delTodo(this.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)