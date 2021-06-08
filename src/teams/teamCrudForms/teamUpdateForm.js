import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/update'
import './teamCRUDForm.css'
import UpdateButton from '../../components/CRUDButtons/updateButton'

function TeamCreate(){
    return(
        <div className="viewerCreateForm__page">
        <Header></Header>
        <form>
           <Form></Form>
           <UpdateButton></UpdateButton>
        </form>
        </div>
    );
}

export default TeamCreate;