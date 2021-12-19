import React from 'react';


const Input = ({ label, inputType, minLength, maxLength, ariaLabel, pattern }) => {

  return (
    <>
      <label className="form-label">{label}</label>
      <input className="form-control"
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        aria-label={ariaLabel}
        pattern={pattern}
      />
    </>
  )
}

export default Input;