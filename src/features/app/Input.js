import React from 'react'

export const Input = ({text, handleAdd, handleChange}) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <p className="col-md-12"> TO-DO List </p>
        <input className="form-control form-control-lg col-md-9" value={text} onChange={handleChange}/>
        <button type="submit" className="btn btn-outline-success offset-md-1" onClick={handleAdd}>Submit</button>
      </div>
    </div>
  )
}
