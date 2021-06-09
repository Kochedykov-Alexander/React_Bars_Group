import React from 'react'
import './judges.css'

export default function Judges() {
	const getJudge = () => {
		document.location = 'https://github.com/'
	}

	return (
		
		<div class="content">
				<div class="container">
				<div class="judges">
					<div class="judges__title">Список судей</div>
					<hr class="horizontal_line"/>
					
						<table class="judges__table">
							<tr>
								<th>ФИО</th>
								<th>Вид спорта</th>
								<th>Рейтинг</th>
							</tr>
							<tr onClick={() => getJudge()}>
								<td><a href="/judge">Пьерлуиджи Коллина</a></td>
								<td>Футбол</td>
								<td>1867</td>
							
							</tr>
							<tr onClick={() => getJudge()}>
								<td><a href="/judge">Пьерлуиджи Коллина</a></td>
								<td>Футбол</td>
								<td>1867</td>
							</tr>
							<tr onclick={() => getJudge()}>
								<td><a href="/judge">Пьерлуиджи Коллина</a></td>
								<td>Футбол</td>
								<td>1867</td>
							</tr>
						</table>
					<div class="judges__button">
						<a href="/judgeCreate" class="judges__button_create">Создать</a>
					</div>
				</div>
				</div>
			</div>
	)
}
