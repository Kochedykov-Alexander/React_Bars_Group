import React from 'react'

const style = {
    color:"#464866"
}

function Table(){
    return(
        <div className="table">
            <table width="80%" height="40%" align="center">
                <tr align="center" bgcolor={style.color}><td colspan="4" height="70px" ><h2>Зрители</h2></td></tr>
                <tr><td align="center" >2</td><td>2</td><td>2</td><td>2</td></tr>
                <tr><td>2</td><td>2</td><td>2</td><td>2</td></tr>
                <tr><td>2</td><td>2</td><td>2</td><td>2</td></tr>
            </table>
        </div>
    );
}

export default Table;