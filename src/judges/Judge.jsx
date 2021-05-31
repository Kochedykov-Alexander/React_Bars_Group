import React from 'react'
import './judge.css'
import logo from './judge__photo.jpg'


export default function Judge() {
	return (
		
		<div className="content">
				<div className="container">
				<div className="judge">
					
					<div className="judge__title">Личный кабинет</div>
					<hr className="horizontal_line"/>
					<div className="judge__profile">
						<div className="judge__profile_photo">
							<img src={logo} alt="" className="judge__profile_photo_img"/>
						</div>
						<div className="judge__profile_desc">
							<div className="judge__profile_desc_general">
								<a href="" className="judge__profile_desc_general_href">Общие сведения</a>
							</div>
							<div className="judge__profile_desc_name">ФИО: Пьерлуиджи Коллина</div>
							<div className="judge__profile_desc_birthday">ДАТА РОЖДЕНИЯ: 13.02.1960 г.</div>
							<div className="judge__profile_desc_kind">ВИД СПОРТА: Футбол</div>
							<div className="judge__profile_desc_rating">РЕЙТИНГ: 1867</div>
						</div>
					</div>
					<div className="judge__button">
						<a href="#" className="judge__button_edit">Редактировать</a>
					</div>
				</div>
				</div>
			</div>
			
			
			
	)
}
