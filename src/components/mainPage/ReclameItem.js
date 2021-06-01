import React from 'react'

function ReclameItem(props){
    return (
        <div className="reclame__item">
            <img src={props.img} width="100px" height="100px"/>
            <p>{props.name}</p>
            <div className="description">
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}
export default ReclameItem