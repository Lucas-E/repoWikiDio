import React from 'react'
import { Fragment } from 'react'
import {ItemContainer} from './style'
const ItemRepo = ({nome, repo, link, id, handleRemove}) => {
  return (
    <Fragment>
        <ItemContainer>
            <h3>{nome}</h3>
            <p>{repo}</p>

            <a href={link}>Ver Repositório</a><br />
            <a href="#" className='remove' onClick={() => handleRemove(id)}>Remove</a>
            <hr />
        </ItemContainer>
    </Fragment>
  )
}

export default ItemRepo