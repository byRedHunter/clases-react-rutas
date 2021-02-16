import React from 'react'

export const LoginScreen = ({ history }) => {
	const handleClick = () => {
		// history.push('/')
		history.replace('/')
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
