import React, { useState, useEffect, useContext }  from 'react'
import './judgeCRUDForm.css'

export default function JudgeForm() {

    const [judge, setJudge] = useState({name:'Ремир',surname:'Зиятдинов',raiting:1429});


	return (
        <div className="registrationForm">
        <span className="registrationField">Имя</span><div><input type="text" onChange={e => setJudge(e.target.value)} value={judge.name}/></div>
        <span className="registrationField">Фамилия</span><div><input type="text" onChange={e => setJudge(e.target.value)} value={judge.surname}/></div>
        <span className="registrationField">Дата рождения</span><div><input type="date"/></div>
        <span className="registrationField">Вид спорта</span><div>
            <select >
                <option>Баскетболл</option>
                <option>Футболл</option>
                <option>Теннис</option>
            </select>
        </div>
        <span className="registrationField">Рейтинг</span><div><input type="text" onChange={e => setJudge(e.target.value)} value={judge.raiting}/></div>
</div>
    );
}