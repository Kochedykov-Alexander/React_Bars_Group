import React from 'react'
import './listOfPlayers.css'

export default function AdminListOfPlayers() {
    const getPlayer = () => {
		document.location = 'https://github.com/'
	}

	return (
		<div className="listOfPlayers">
            <div class="content">
				<div class="container">
				<div class="players">
					<div class="players__title">Список игроков</div>
					<hr class="horizontal_line"/>
						<table class="players__table">
							<tr>
								<th>ФИО</th>
								<th>Дата рождения</th>
								<th>Вид спорта</th>
                                <th>Команда</th>
							</tr>
							<tr onClick={() => getPlayer()}>
								<td><a href="/player">Криштиану Роналдо</a></td>
								<td>14.02.1988</td>
								<td>Футбол</td>
                                <td>Реал-Мадрид</td>
							</tr>
						
							<tr onClick={() => getPlayer()}>
								<td><a href="/player">Лионель Месси</a></td>
								<td>14.02.1988</td>
								<td>Футбол</td>
                                <td>Барселона</td>
							</tr>
							<tr onclick={() => getPlayer()}>
								<td><a href="/player">Майкл Джордан</a></td>
								<td>29.07.1957</td>
								<td>Баскетбол</td>
                                <td>Lakers</td>
							</tr>
						</table>
					<div class="players__button">
						<a href="/playerCreate" class="players__button_create">Создать</a>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
