import React from 'react'
import './viewer.css'
import viewer from '../../src/img/viewer.jpg'

export default function Viewer() {

	//пример использования сквозного компонентирования

	//const currentUser = useSelector(state => state.user.currentUser)
	//const dispatch = useDispatch()

	//какая то функция, вешается на обработчики событий
	//const createTicket = (name, data) => {
		//dispatch(setTicket())
	//}

	//

	return (
		<div className="content">
		<div className="container">
				<div className="viewer">
					<div className="viewer__title">
						Личный кабинет 
					</div>
					<hr className="viewer__line"/>
					<div className="viewer__row">
						<div className="viewer__column_photo">
							<img src={viewer} class="viewer__column_photo_img" alt="" />
						</div>

						<div className="viewer__column_data">

							<div className="viewer__column_data_title">Общие сведения</div>
							<div className="viewer__column_data__info">
								<div className="viewer__column_data_login">Login: Julia</div>
								<div className="viewer__column_data_fio">ФИО: Юлия Михайлова</div>
								<div className="viewer__column_data_date">Дата рождения: 01.02.1995</div>
							</div>
						</div>

						<div className="viewer__column_button">
							<button className="viewer__column_button_change">Изменить</button>
						</div>
					</div>

					<div className="table__header">
						Мои мероприятия
					</div>
					<div className="table__rows">
						<div className="table__row">
							<div className="table__row_event">
								Мероприятие
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
						
						<div className="table__row">
					
							<div className="table__row_event">
								Футбольный матч
							</div>
							<div className="table__row_teams">
								<a href="event">Рубин-Спартак</a>
							</div>
							<div className="table__row_date">
								18.06.2021
							</div>
							<div className="table__row_time">
								18:00
							</div>
				</div>
			</div>
			</div>
			</div>
			</div>
	)
}
