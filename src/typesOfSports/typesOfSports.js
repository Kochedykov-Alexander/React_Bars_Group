import React from 'react';
import './typesOfSports.css';
import basketball from './img/Баскетбол.png';
import tennis from './img/Теннис.jpg';
import football from './img/Футбол.png';
import baseball from './img/Бейсбол.jpg';
import athletics from './img/Легкая атлетика.png';

export default function TypesOfSports() {

	return (
		<div className="typesOfSports">
            <div className="content">
                <h2>Виды спорта</h2>
                <div className="sport__carts">
                    <div className="sport__carts__item">
                        <h4>Баскетбол</h4>
                        <img src={basketball} alt=""/>
                    </div>
                    <div className="sport__carts__item">
                        <h4>Футбол</h4>
                        <img src={football}/>
                    </div>
                    <div className="sport__carts__item">
                        <h4>Теннис</h4>
                        <img src={tennis}/>   
                    </div>
                    <div className="sport__carts__item">
                        <h4>Бейсбол</h4>
                        <img src={baseball}/>
                    </div>
                    <div className="sport__carts__item">
                        <h4>Атлетика</h4>
                        <img src={athletics}/>
                    </div>
                </div>
            </div>
		</div>
	);
}
