import React from 'react'
import './admin.css'

export default function Admin() {
	return (
		<div className="content">
				<div className="container">
				<div className="admin">
				<div className="admin__title">Администраторская панель</div>
				<hr className="horizontal_line"/>
				<div className="admin__description">Создавайте, редактируйте и удаляйте все сущности на <a href="" className="admin__description_href">вашем</a> сайте</div>	
				<div className="admin__items">
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Мероприятия</a></div>
						<a href=""><div className="admin__item_photo"><img src="/admin/img/Мероприятие.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Зрители</a></div>
						<a href=""><div className="admin__item_photo"><img src="/admin/img/Зритель.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Судьи</a></div>
						<a href=""><div className="admin__item_photo"><img src="/admin/img/Судья.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Спортсмены</a></div>
						<a href=""><div className="admin__item_photo"><img src="/admin/img/Спортсмены.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Команды</a></div>
						<a href=""><div className="admin__item_photo"><img src="/admin/img/Команды.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
					<div className="admin__item">
						<div className="admin__item_title"><a href="" className="text">Билеты</a></div>
						<a href=""><div className="admin__item_photo"><img src="../tickets.jpg" className="admin__item_photo_img" alt=""/></div></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
