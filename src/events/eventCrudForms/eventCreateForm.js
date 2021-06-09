import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/create'
import './eventCRUDForm.css'
import CreateButton from '../../components/CRUDButtons/createButton'

function EventCreate(){
    return(
        <div className="eventCreateForm__page">
            <Header></Header>
            <form>
                <Form></Form>
                <CreateButton></CreateButton>
            </form>
        </div>
    );
}

export default EventCreate;