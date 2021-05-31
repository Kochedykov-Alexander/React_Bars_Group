import React from 'react'

export default function Event() {
	return (
		<div className="content">
				<div className="event">
					<div className="event__left">
						<div className="event__photo">
							<img src="/event/img/photo.jpg" className="event__photo_img" alt=""/>
						</div>
					</div>
					<div className="event__right">
						<div className="event__right_title">
							Событие 1
						</div>
						<div className="event__right__info">
							<div className="event__right__info_date">
								22.04.2021
							</div>

							<div className="event__right__info_time">
								22:00
							</div>
						</div>
						<div className="event__right__teams">
							<div className="event__right__teams_home">
								Команда 1
							</div>
							<div className="event__right__teams_away">
								Команда 2
							</div>
						</div>
						<div className="event__right__sport">
							Теннис
						</div>
					</div>
				</div>
				<div className="table">
					<div className="table_result" onclick={changeBg()} >
					<a href="#">
						Результаты
					</a>
					</div>
					<div className="table__stats" onclick={changeSt()}>
						<a href="#">Статистика</a>
					</div>
					<div className="table__empty" onclick={changeEm()}>
						
					</div>
					</div>
					</div>
				
	)
}
