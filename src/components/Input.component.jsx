import React from 'react';


const Input = ({ label, ...rest }) => {

  return (
    <>
      <label className="form-label">{label}</label>
      <input className="form-control"
        {...rest}
      />
    </>
  )
}

export default Input;