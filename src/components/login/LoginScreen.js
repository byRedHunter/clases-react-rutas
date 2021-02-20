import React, { useContext } from 'react'
import { Authcontext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(Authcontext)

	const handleClick = () => {
		const lastPath = localStorage.getItem('lastPath') || '/'

		dispatch({
			type: types.login,
			payload: { name: 'Jhonny' },
		})
		history.replace(lastPath)
	}

	return (
		<div className='container'>
			<h3>Login</h3>
			<hr />

			<button className='btn btn-primary' onClick={handleClick}>
				Login
			</button>
		</div>
	)
}
