import React, { useState, useEffect, useContext }  from 'react'
import './playerCRUDForm.css'

export default function PlayerForm() {

    const [player, setPlayer] = useState({name:'Ремир',surname:'Зиятдинов',command:'Вашингтон Уизард',carrier:'Джордан сыграл важную роль в популяризации баскетбола и НБА во всём мире в 1980-х и 1990-х годах.'});

	return (
            <div className="registrationForm">
            <span className="registrationField">Имя</span><div><input type="text" onChange={e => setPlayer(e.target.value)} value={player.name}/></div>
            <span className="registrationField">Фамилия</span><div><input type="text"onChange={e => setPlayer(e.target.value)} value={player.surname}/></div>
            <span className="registrationField">Дата рождения</span><div><input type="date"/></div>
            <span className="registrationField">Вид спорта</span><div>
                <select >
                    <option>Баскетболл</option>
                    <option>Футболл</option>
                    <option>Теннис</option>
                </select>
            </div>
            <span className="registrationField">Команда</span><div><input type="text" onChange={e => setPlayer(e.target.value)} value={player.command}/></div>
            <span className="registrationField">Карьера</span><div><textarea type="text" onChange={e => setPlayer(e.target.value)} value={player.carrier}/></div>
    </div>);
}