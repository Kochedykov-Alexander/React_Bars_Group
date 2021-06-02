import React from 'react';
import './ticket.css';

export default function Team() {

	return (
		<div className="content">
            <div className="container">
                <div className="ticket">
                    <div className="tickets__title"><h3>Список билетов</h3></div>
					<hr className="horizontal_line"/>
					<table className="tickets__table">
						<tr>
							<th>Название мероприятия</th>
							<th>Место</th>
							<th>Дата</th>
                            <th>Время</th>
						</tr>
						<tr>
							<td>Матч Рубин-Спартак</td>
							<td><div><a>7 ряд 8 место</a></div></td>
							<td>21.06.2021</td>	
                            <td>18:00</td>					
						</tr>
						<tr>
							<td>Lakers</td>
							<td><div><a>Открыть список</a></div></td>
							<td>Фрэнк Вогель</td>
                            <td>ФК Рубин</td>
						</tr>
					</table>
					<div className="tickets__button">
						<a href="/ticket/create" class="tickets__button_create">Создать</a>
					</div>
                 </div>
            </div>
		</div>
	);
}
