import React from 'react'
import './listOfTeams.css'

export default function ListOfTeams() {
	const getTeam = () => {
		document.location = 'https://github.com/'
	}
	return (
		<div class="content">
				<div class="container">
				<div class="teams">
					<div class="teams__title">Список команд</div>
					<hr class="horizontal_line"/>
					
						<table class="teams__table">
							<tr>
								<th>Название команды</th>
								<th>Игроки</th>
								<th>Тренер</th>
							</tr>
							<tr onClick={() => getTeam()}>
								<td>ФК Рубин</td>
								<td><div><a>Открыть список</a></div></td>
								<td>Курбан Бердыев</td>						
							</tr>
							<tr onClick={() => getTeam()}>
								<td>Lakers</td>
								<td><div><a>Открыть список</a></div></td>
								<td>Фрэнк Вогель</td>
							</tr>
						</table>
					<div class="teams__button">
						<a href="/team/create" class="teams__button_create">Создать</a>
					</div>
				</div>
				</div>
			</div>
	)
}
