import React from 'react';
import './adminTicket.css';

export default function Team() {

	return (
		<div className="ticket__content">
            <div className="ticket__container">
                <div className="ticket">
                    <div className="tickets__title"><h3>Билеты на Матч Рубин-Спартак</h3></div>
					<hr className="horizontal_line"/>
					<table className="tickets__table">
						<tr>
							<th>Место</th>
							<th>Время</th>
							<th>Есть в наличии</th>
                            <th>Цена</th>
							<th></th>
						</tr>
						<tr>
							<td>1</td>
							<td><div><a>18:00</a></div></td>
							<td>Да</td>	
                            <td>600</td>
							<td><a href="#">Редактировать</a></td>						
						</tr>
						<tr>
							<td>2</td>
							<td><div><a>18:00</a></div></td>
							<td>Нет</td>
                            <td>700</td>
							<td><a href="#">Редактировать</a></td>	
						</tr>
					</table>
					<div className="tickets__button">
						<a href="/ticketСreate" class="tickets__button_create">Создать</a>
					</div>
                 </div>
            </div>
		</div>
	);
}
