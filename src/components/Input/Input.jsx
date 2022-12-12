import React from 'react'
import { Fragment } from 'react'
import {InputContainer} from './style'

const Input = ({value, onChange}) => {
  return (
    <Fragment>
        <InputContainer>
            <input type="text" placeholder='Digite a pesquisa' value={value} onChange={onChange}/>
        </InputContainer>
    </Fragment>
  )
}

export default Input