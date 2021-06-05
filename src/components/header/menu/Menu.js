import React from 'react'

const menuButtons = [
    ["купить билет","tickets"],
    ["спортсмены","listOfPlayers"],
    ["команды","listOfTeams"],
    ["виды спорта","typesOfSports"],
    ["мероприятия","listOfEvents"]
]

function Menu(){
    return(
        <div className="menu">
            {menuButtons.map(button =>(<div><a className="menu__item" href={button[1]}>{button[0]}</a></div>))}
        </div>
    );
}

export default Menu