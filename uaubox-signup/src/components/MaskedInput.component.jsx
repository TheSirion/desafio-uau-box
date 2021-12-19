import React from 'react';
import InputMask from "react-input-mask";


const MaskedInput = ({ mask }) => {
  return (
    <>
      <label className='form-label'>CEP</label>
      <InputMask className='form-control' mask={mask} maskChar="_" alwaysShowMask />
    </>
  )
}

export default MaskedInput;