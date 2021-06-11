import React, { useState, useEffect, useContext }  from 'react'
import './eventCRUDForm.css'

export default function EventForm() {
    
    const [event, setEvent] = useState({name:'Спартка',first_team:'команда 1',second_team:'команда 2'});

	return (
        <div className="registrationForm">
        <span className="registrationField">Название</span><div><input type="text" onChange={e => setEvent(e.target.value)} value={event.name}/></div>
        <span className="registrationField">Команда 1</span><div><input type="text" onChange={e => setEvent(e.target.value)} value={event.first_team}/></div>
        <span className="registrationField">Команда 2</span><div><input type="text" onChange={e => setEvent(e.target.value)} value={event.second_team}/></div>
        <span className="registrationField">Вид спорта</span><div>
            <select >
                <option>Баскетболл</option>
                <option>Футболл</option>
                <option>Теннис</option>
            </select>
        </div>
        <span className="registrationField">Дата</span><div><input type="date"/></div>
</div>
    );
}