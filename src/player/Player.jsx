import React from 'react'
import './player.css'


export default function Player() {
	

	return (
		<div className="content">
			<div className="container">
				<div className="player">
					<div className="player__left">
						<div className="player__photo">
							<img src="/player/img/photo.jpg" className="player__photo_img" alt=""/>
						</div>
					</div>
					<div className="player__right">
						<div className="player__right_nickname">
							Событие 1
						</div>
						<div className="player__right__sport">
							Теннисист
						</div>
						
						<div className="player__right__name">
							Ремир Зиятдинов
						</div>

						<div className="player__right__age">
							21 год
						</div>
					</div>

					<button type="submit" className="button__change">
						Изменить
					</button>
				</div>
				<div className="table">
					<div className="table_result" >
 						
							<a href="#">
								Карьера
							</a>
							
 						
					
					</div>
					<div className="table__stats">
						
							<a href="#">
								Личные достижения
							</a>
 						
					</div>
					<div className="table__empty">
						
							<a href="#">
								Команда
							</a>
 						
					</div>
				</div>
			</div>
			</div>
	)
}
