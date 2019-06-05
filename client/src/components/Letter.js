import React from 'react'
import styled from 'styled-components'

import socket from '../global/socket'

const Button = styled.button`
	background: transparent;
	font-size: 1.5em;
	height: 1.5em;
	width: 1.5em;
	text-align: center;
`

const Letter = props => {

	const { letter } = props
	if (!letter){
		// Must have letter
		return null
	}

	const handleClick = () => {
		socket.emit('letter select', letter)
	}

	return (
		<Button onClick={handleClick}>
			{letter}
		</Button>
	)
}

export default Letter

export { Button as LetterButton }
