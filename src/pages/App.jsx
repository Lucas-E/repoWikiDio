import React from "react";
import { Fragment } from "react";
import Logo from "../components/Logo/Logo";
import { Container } from "./style";
import Input from "../components/Input/Input";
import ItemRepo from "../components/ItemRepo/ItemRepo";
import { useState } from "react";
import Button from "../components/Button/Button";

import {api} from '../services/api'

export const App = () => {

  const [repos, setRepos] = useState([])
  const [currentRepo, setCurrentRepo] = useState('')

  const handleSearchRepo = async () => {

    const {data} = await api.get(`${currentRepo}`);
    const exists = repos.find(element => element.id === data.id)
    if(data.id && !exists){
      setRepos(prev => [...prev, data])
      return 0;
    }
  }

  const handleRemoveRepo = (id) => {
    const reposBack = repos.filter(element =>{
      if(element.id !== id){
        return element
      }
    });
    setRepos([...reposBack])

  }

  return (
    <Fragment>
      <Container>
        <Logo width={72} heigth={72} />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}></Input>
        <Button onClick={handleSearchRepo}></Button>
        {repos.map( repo => <ItemRepo nome={repo.name} repo={repo.full_name} id={repo.id} link={`https://github.com/${repo.full_name}`} handleRemove={handleRemoveRepo}/>)}
      </Container>
    </Fragment>
  );
};
