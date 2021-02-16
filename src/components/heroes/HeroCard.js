import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
	figure,
}) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<h4 className='card-title'>{superhero}</h4>
			</div>
			<div className='card-body'>
				<img src={figure} alt={superhero} className='img-fluid' />
				<p className='card-text'>{alter_ego}</p>

				{alter_ego !== characters && <p className='card-text'>{characters}</p>}

				<p className='card-text'>
					<small className='text-muted'>{first_appearance}</small>
				</p>

				<Link className='btn btn-primary d-block' to={`./hero/${id}`}>
					Más...
				</Link>
			</div>
		</div>
	)
}
