import React from 'react'
import './event.css'

export default function Event() {
	return (
		<div className="content">
			<div className="container">
				<div className="event">
					<div className="event__title">
						Футбольный матч
					</div>
					<div className="event__info">
						<div className="event__info_kind">Вид спорта: Футбол</div>
						<div className="event__info_teams">Противоборствующие команды: Рубин - Спартак</div>
						<div className="event__info_date">Дата: 12.12.1292</div>
						<div className="event__info_place">Место проведения: Цетральный стадион</div>
					</div>
					<div className="event__button">
						<button className="event__button_buy">Купить билет</button>
					</div>	
				</div>
				</div>
				</div>
				
	)
}
