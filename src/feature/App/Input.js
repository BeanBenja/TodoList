import React from 'react'

const Input = ({handleAddTodo, handleChangeTodoText, text}) => {
  const funcAddTodo = (e) => {
    if (text.trim())
      handleAddTodo(e)
  }
  return (
    <div>
      <input value={text} type="text" onChange={handleChangeTodoText}/>
      <button type="submit" onClick={funcAddTodo}>ADD
      </button>
    </div>
  )
}
export default Input