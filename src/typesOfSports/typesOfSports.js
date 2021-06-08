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
            <div className="typesOfSports__content">
                <h2>Виды спорта</h2>
                <div className="sport__carts">
                    <div className="sport__carts__item">
                        <a href="http://localhost:3000/listOfTeams">                        
                            <h4>Баскетбол</h4>
                            <img src={basketball} alt=""/>
                        </a>
                    </div>
                    <div className="sport__carts__item">
                        <a href="http://localhost:3000/listOfTeams">    
                            <h4>Футбол</h4>
                            <img src={football}/>
                        </a>
                    </div>
                    <div className="sport__carts__item">
                        <a href="http://localhost:3000/listOfTeams">    
                            <h4>Теннис</h4>
                            <img src={tennis}/>   
                        </a>
                    </div>
                    <div className="sport__carts__item">
                        <a href="http://localhost:3000/listOfTeams">  
                            <h4>Бейсбол</h4>
                            <img src={baseball}/>
                        </a>
                    </div>
                    <div className="sport__carts__item">
                        <a href="http://localhost:3000/listOfTeams">  
                            <h4>Атлетика</h4>
                            <img src={athletics}/>
                        </a>
                    </div>
                </div>
            </div>
		</div>
	);
}
