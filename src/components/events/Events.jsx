import React from 'react'
import './events.css'

export default function Events() {
	return (
	
		<div className="content">
			<div className="container">
				
					<div className="table__header">
						Предстоящие Мероприятия
					</div>
					<div className="table__rows">
						<div className="table__row">
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
						</div>
						<a href="">
						<div className="table__row">
							
							<div className="table__row_event">
								Футбольный матч
							</div>
							<div className="table__row_teams">
								Рубин-Спартак
							</div>
							<div className="table__row_date">
								18.06.2021
							</div>
							<div className="table__row_time">
								18:00
							</div>
							
						</div>
						</a>
						
					</div>
					<div className="button__create_block">
						<button className="button__create">
							Создать
						</button>
					</div>
				</div>
			</div>
			
		
	)
}
