import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/update'
import './playerCRUDForm.css'
import UpdateButton from '../../components/CRUDButtons/updateButton'

function PlayerCreate(){
    return(
        <div className="playerCreateForm__page">
        <Header></Header>
        <form>
           <Form></Form>
           <UpdateButton></UpdateButton>
        </form>
        </div>
    );
}

export default PlayerCreate;