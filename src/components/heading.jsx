import React from 'react';
import weather from './weatherFunction';
import {customStyle} from './weatherFunction';
export default function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
    Good {weather}
  </h1>
  )
}