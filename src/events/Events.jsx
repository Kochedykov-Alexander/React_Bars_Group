import React from 'react'
import './events.css'

export default function Events() {
	return (
	
		<div className="content">
			<div className="container">
				<div className="table">
					<div className="table__header">
						Предстоящие Мероприятия
					</div>
					<table className="linkRow">
						<tr className="table__item">
							<td className="table__item_time">
								22:00
							</td>
							<td className="table__item_date">
								22.04.2021
							</td>
							<td className="table__item_name">
								событие 1
							</td>
							<td className="table__item_team_home">
								команда 1
							</td>
							<td className="table__item_team_away">
								команда 2
							</td>
						</tr>
							
						<tr className="table__item">
								
							<td className="table__item_time">
								22:00
							</td>
							<td className="table__item_date">
								22.04.2021
							</td>
							<td className="table__item_name">
								событие 1
							</td>
							<td className="table__item_team_home">
								команда 1
							</td>
							<td className="table__item_team_away">
								команда
							</td>
						
						</tr>
					
						<tr className="table__item">
							<td className="table__item_time">
								22:00
							</td>
							<td className="table__item_date">
								22.04.2021
							</td>
							<td className="table__item_name">
								событие 1
							</td>
							<td className="table__item_team_home">
								команда 1
							</td>
							<td className="table__item_team_away">
								команда 2
							</td>
						</tr>
					</table>
				</div>
			</div>
			</div>
		
	)
}
