import React from 'react'
import './team.css'

export default function Team() {

	return (

		<div class="team">
			<div class="team__content">
				<div className="teams__table__header">
					<h3>Игроки команды Рубин</h3>
				</div>
				<div className="team__table__rows">
					<div className="team__table__row">
						<div className="team__table__row__space"></div>
						<div className="table__row__col__name">
							<h4>ФИО</h4>
						</div>
						<div className="table__row__col__birth">
							<h4>Дата рождения</h4>
						</div>
						<div className="team__table__row__space"></div>
					</div>
					<div className="team__table__row">
						<div className="team__table__row__space"></div>
						<div className="table__row__name">
							<a href="/player">Роман Широков</a>
						</div>
						<div className="table__row__birth">
							24.06.1987
						</div>
						<div className="team__table__row__space"></div>
					</div>
					<div className="team__table__row">
						<div className="team__table__row__space"></div>
						<div className="table__row__birth">
							<a href="/player">Сергей Рыжиков</a>
						</div>
						<div className="table__row__birth">
							17.02.1963
						</div>
						<div className="team__table__row__space"></div>
					</div>
				</div>	
			</div>
		</div>
	);
}
