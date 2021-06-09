import React from 'react'
import './listOfTeams.css'

export default function ListOfTeams() {
	const getTeam = () => {
		document.location = 'http://localhost:3000/team'
	}
	return (
		<div class="content">
				<div class="container">
				<div class="teams">
					<div class="teams__title">Список команд</div>
					<hr class="horizontal_line"/>		
						<table class="teams__table">
							<tr>
								<th><h3>Команды</h3></th>
								<th>
								<div class="btn-group">
									<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Виды спорта
									</button>
									<ul class="dropdown-menu">
										<li>1</li>
										<li>2</li>
										<li>3</li>
									</ul>
									</div>
								</th>						
							</tr>
							<tr>
								<td><h5>Название команды</h5></td>
								<td><h5>Тренер</h5></td>						
							</tr>
							<tr onClick={() => getTeam()}>
								<td><a href="/team">ФК Рубин</a></td>
								<td>Курбан Бердыев</td>						
							</tr>
							<tr onClick={() => getTeam()}>
								<td><a href="/team">Lakers</a></td>
								<td>Фрэнк Вогель</td>
							</tr>
						</table>
					<div class="teams__button">
						<a href="/teamCreate" class="teams__button_create">Создать</a>
					</div>
				</div>
				</div>
			</div>
	)
}
