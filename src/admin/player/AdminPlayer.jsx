import React from 'react'
import './adminPlayer.css'
import avatar from '../img/messi.jpg'


export default function Player() {
	

	return (
		<div className="content">
			<div className="container">
				
			<div className="player">
					
					<div className="player__row">
						<div className="player__column_photo">
							<img src={avatar} class="player__column_photo_img" alt="" />
							<div className="player__column_photo_change"><a href="#">изменить фото</a></div>

						</div>

						<div className="player__column_data">

							<div className="player__column_data_title">Общие сведения</div>
							<div className="player__column_data__info">
								<div className="player__column_data_login">ФИО: Лионель Месси</div>
								<div className="player__column_data_fio">Дата рождения: 24.06.1987</div>
								<div className="player__column_data_date">Вид спорта: Футбол</div>
							</div>
						</div>

						<div className="player__column_button">
						<a href="/playerUpdate"><button className="player__column_button_change">Изменить</button></a>
						</div>
					</div>
					<div className="player__table">
						<div className="player__table_header">
							<div className="player__table_header_item_career">
								Карьера
							</div>
							<div className="player__table_header_item_achievements">
								Личные достижения
							</div>
							<div className="player__table_header_item_team">
								Команда
							</div>
						</div>
						<div className="player__table_body">
						В составе молодёжной сборной Аргентины Месси стал чемпионом мира 2005 года и в том же году дебютировал за основную сборную Аргентины. В 2007 году на Кубке Америки стал серебряным призёром турнира, а также был признан его лучшим молодым игроком. В составе сборной до 23 лет стал олимпийским чемпионом 2008 года. С 2011 года, уже в качестве капитана сборной, Месси принял участие в трёх финалах крупных турниров подряд: чемпионата мира 2014 года и Кубках Америки 2015 и 2016 годов, однако во всех случаях вместе со своей командой потерпел поражение. 
 
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
