import React from 'react'
import ReclameItem from './ReclameItem'
import statistics from "../../img/statistics.png"
import tickets from "../../img/tickets.png"
import televisionscreen from "../../img/televisionscreen.png"

const img = [statistics, tickets, televisionscreen];
const name = ["статистика", "билеты", "прямой эфир"];
const description = ["Следи за успехами любимых команд и игроков!", "Покупай билеты и приходи на наши спортивные мероприятия", "Следи за спортиными событиями в прямом эфире!"]

function Reclame(){
    return (
        <div className="reclame">
            <ReclameItem img={img[0]} name={name[0]} description={description[0]}/>
            <ReclameItem img={img[1]} name={name[1]} description={description[1]}/>
            <ReclameItem img={img[2]} name={name[2]} description={description[2]}/>
        </div>
    );
}
export default Reclame