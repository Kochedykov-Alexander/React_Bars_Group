import React from 'react'

const style = {
    color:"#464866"
}

function Table(){
    return(
        <div className="table">
            <table width="80%" height="40%" align="center" >
                <tr align="center" bgcolor={style.color}><td colspan="3" height="70px" ><h2>Зрители</h2></td></tr>
                <tr><td align="center" >ФИО</td><td>Логин</td><td>Дата рождения</td></tr>
                <tr><td><a href='admin/viewer/1'>Юлия Михайловна</a></td><td>Yulia</td><td>02.02.1995</td></tr>
                <tr><td>2</td><td>2</td><td>2</td></tr>
            </table>
        </div>
    );
}

export default Table;