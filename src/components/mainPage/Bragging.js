import React from 'react'

const style = {
    color: '#45A29E',
};

function Bragging(){
    return(
        <div className="bragging">
            Мы организовали более <span style={style}>10 000</span> спортивних мероприятий 
        </div>
    );
}

export default Bragging;