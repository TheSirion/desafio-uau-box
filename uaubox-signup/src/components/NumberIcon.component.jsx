import React from 'react';
import { ReactComponent as Circle } from "../assets/circle.svg";

const NumberIcon = ({ iconNumber }) => (
  <span className="number-icon mx-3">
    <Circle className="icon-circle" />
    <span className="icon-number">{iconNumber}</span>
  </span>
)

export default NumberIcon;