import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/create'
import './playerCRUDForm.css'
import CreateButton from '../../components/CRUDButtons/createButton'

function PlayerCreate(){
    return(
        <div className="playerCreateForm__page">
        <Header></Header>
        <form>
           <Form></Form>
           <CreateButton></CreateButton>
        </form>
        </div>
    );
}

export default PlayerCreate;