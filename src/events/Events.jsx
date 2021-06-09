import React from 'react'
import './events.css'
import './events1.css'

export default function Events() {
	const getEvent = () => {
		document.location = '/event';
	} 
	return (
			<div className="content">
			<div className="container">
				
					<div className="events__table__header">
						Предстоящие Мероприятия
					</div>
					<div className="events__table__rows">
						<div className="events__table__row">
							<div className="table__row_event">
								Событие
							</div>
							<div className="table__row_teams">
								Команды
							</div>
							<div className="table__row_date">
								Дата
							</div>
							<div className="table__row_time">
								Время
							</div>
							<div className="table__row_ticket">
							</div>
						</div>
						
						<div className="events__table__row">
					
							<div className="events__table__row_event">
								Футбольный матч
							</div>
							<div className="table__row_teams">
								<a href="/event">Рубин-Спартак</a>
							</div>
							<div className="table__row_date">
								18.06.2021
							</div>
							<div className="table__row_time">
								18:00
							</div>
							<div className="table__row_ticket">
								<a href="/tickets">Купить билет</a>
							</div>
						</div>	
					</div>
					<div className="button__create_block">
						<button className="button__create">
							<a href="/eventCreate">Создать</a>
						</button>
					</div>
				</div>
			</div>	
	)
}
