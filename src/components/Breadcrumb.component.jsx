import React from 'react';
import NumberIcon from "./NumberIcon.component";

const Breadcrumb = ({ active }) => {
  return (
    <div className="breadcrumb mb-0">
      <p className={`breadcrumb__step d-flex ${active === 1 ? "breadcrumb__step--active" : ""}`}>
        <NumberIcon iconNumber={1} />
        Identificação</p>
      <p className={`breadcrumb__step d-flex ${active === 2 ? "breadcrumb__step--active" : ""}`}>
        <NumberIcon iconNumber={2} />
        Dados pessoais</p>
      <p className={`breadcrumb__step d-flex ${active === 3 ? "breadcrumb__step--active" : ""}`}>
        <NumberIcon iconNumber={3} />
        Confirmação</p>
    </div>
  )
}

export default Breadcrumb;