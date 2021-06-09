import React from 'react'
import Form from './form'
import Header from './CRUDHeaders/create'
import './judgeCRUDForm.css'
import CreateButton from '../../components/CRUDButtons/createButton'

function JudgeCreate(){
    return(
        <div className="judgeCreateForm__page">
            <Header></Header>
            <form>
                <Form></Form>
                <CreateButton></CreateButton>
            </form>
        </div>
    );
}

export default JudgeCreate;