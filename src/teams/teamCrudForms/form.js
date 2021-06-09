import React, { useState, useEffect, useContext }  from 'react'
import './teamCRUDForm.css'

export default function TeamForm() {
    const [team, setTeam] = useState({name:'Рубин',players:['Зиятдинов','Ремир','Зиятдинов','Ремир','Зиятдинов','Ремир'],trainer:'Вашингтон Уизард'});

	return (
            <div className="registrationForm">
                <span className="registrationField">Название</span><div><input type="text" onChange={e => setTeam(e.target.value)} value={team.name}/></div>   
                <span className="registrationField">Вид спорта</span><div>
                    <select >
                        <option>Баскетболл</option>
                        <option>Футболл</option>
                        <option>Теннис</option>
                    </select>
                </div>
                <span className="registrationField">Тренер</span><div><input type="text" onChange={e => setTeam(e.target.value)} value={team.trainer}/></div>
                <span className="registrationField">Команда</span><div><textarea type="text" onChange={e => setTeam(e.target.value)}/></div>
            </div>
    );
}