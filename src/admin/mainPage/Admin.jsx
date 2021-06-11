import React from 'react'
import './admin.css';
import imgEvent from "../img/Мероприятие.png";
import imgViewer from "../img/Зритель.png";
import imgJudge from "../img/Судья.png";
import imgPlayer from "../img/Спортсмены.png";
import imgTeams from "../img/Команды.png";
import imgTickets from "../img/Билеты.png";
import './admin.css';

export default function Admin() {
	return (
		<div className="content">
			<div className="admin__container">
				<div className="admin">
				<div className="admin__title">Администраторская панель</div>
				<hr className="horizontal_line"/>
				<div className="admin__description">Создавайте, редактируйте и удаляйте все сущности на <a href="" className="admin__description_href">вашем</a> сайте</div>	
				<div className="admin__items">
					<div className="admin__item">
						<div className="admin__item_title"><a href="/adminListOfEvents" className="text">Мероприятия</a></div>
						<a href="/adminListOfEvents"><div className="admin__item_photo"><img src={imgEvent} className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="/listOfViewers" className="text">Зрители</a></div>
						<a href="/listOfViewers"><div className="admin__item_photo"><img src={imgViewer} className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="/listOfJudges" className="text">Судьи</a></div>
						<a href="/listOfJudges"><div className="admin__item_photo"><img src={imgJudge} className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="/adminListOfPlayers" className="text">Спортсмены</a></div>
						<a href="/adminListOfPlayers"><div className="admin__item_photo"><img src={imgPlayer} className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="/adminListOfTeams" className="text">Команды</a></div>
						<a href="/adminListOfTeams"><div className="admin__item_photo"><img src={imgTeams} className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="/adminListOfEvents" className="text">Билеты</a></div>
						<a href="/adminListOfEvents"><div className="admin__item_photo"><img src={imgTickets} className="admin__item_photo_img" alt=""/></div></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
