import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {
	const { heroeId } = useParams()

	const hero = useMemo(() => getHeroById(heroeId), [heroeId])
	// const hero = getHeroById(heroeId)

	if (!hero) {
		return <Redirect to='/' />
	}

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
		figure,
	} = hero

	const handleReturn = () => {
		if (history.length <= 2) {
			history.push('/')
		} else {
			history.goBack()
		}
	}

	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className='col-4'>
					<img src={figure} alt={superhero} className='img-thumbnail' />
				</div>

				<div className='col-8'>
					<h3>{superhero}</h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							<strong>Alter ego: </strong>
							{alter_ego}
						</li>
						<li className='list-group-item'>
							<strong>Publisher: </strong>
							{publisher}
						</li>
						<li className='list-group-item'>
							<strong>First Appearance: </strong>
							{first_appearance}
						</li>
					</ul>

					<h5>Characters</h5>
					<p>{characters}</p>

					<button className='btn btn-warning' onClick={handleReturn}>
						Return
					</button>
				</div>
			</div>
		</div>
	)
}
