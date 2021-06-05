import React from 'react'
import './viewer.css'

export default function Viewer() {
	return (
		<div className="content">
			<div className="container">
				<div className="viewer">
					<div className="viewer__left">
						<div className="viewer__photo">
							<img src="/viewer/img/avatar.jpg" className="viewer__photo_img" alt=""/>
						</div>
					</div>
					<div className="viewer__right">
						<div className="viewer__right_nickname">
							srabdullin
						</div>
						
						
						<div className="viewer__right__name">
							Шамиль Абдуллин, 22 года
						</div>

						
					</div>

					<button type="submit" className="button__change">
						Изменить
					</button>
				</div>
				<div className="table">
					<div className="table_header">
						Мои мероприятия
					</div>
					<div className="table__item">
						<div className="table__item_time">
							22:00
						</div>
						<div className="table__item_date">
							22.04.2021
						</div>
						<div className="table__item_name">
							событие 1
						</div>
						<div className="table__item_home">
							команда 1
						</div>
						<div className="table__item_away">
							команда 2
						</div>
					</div>
				</div>
				</div>
			</div>
	)
}
