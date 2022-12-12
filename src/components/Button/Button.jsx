import React from 'react'
import {ButtonContainer} from './style'
const Button = ({onClick, ...rest}) => {
  return (
    <ButtonContainer>
        <button onClick={onClick}>Buscar</button>
    </ButtonContainer>
  )
}

export default Button