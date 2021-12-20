import React from 'react';
import InputMask from "react-input-mask";


const MaskedInput = ({ mask, onChange }) => {
  return (
    <>
      <label className='form-label'>CEP</label>
      <InputMask className='form-control' onChange={onChange} mask={mask} maskChar="_" alwaysShowMask />
    </>
  )
}

export default MaskedInput;