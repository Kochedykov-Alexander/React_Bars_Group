import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/create'
import './teamCRUDForm.css'
import CreateButton from '../../components/CRUDButtons/createButton'

function TeamCreate(){
    return(
        <div className="teamCreateForm__page">
            <Header></Header>
            <form>
                <Form></Form>
                <CreateButton></CreateButton>
            </form>
        </div>
    );
}

export default TeamCreate;