import React from 'react';
import Circle from "../assets/circle.svg";

const Breadcrumb = () => {


  return (
    <div className='breadcrumb'>
      <p className="breadcrumb__step"><img src={Circle} alt="step 1" /> Identificação</p>
      <p className="breadcrumb__step">2 - Dados pessoais</p>
      <p className="breadcrumb__step">3 - Confirmação</p>
    </div>
  )
}

export default Breadcrumb;