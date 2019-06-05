import React from 'react'
import styled from 'styled-components'

import { LetterButton } from './Letter'

import socket from '../global/socket'

const Button = styled(LetterButton)`
	width: auto;
`

const Goodbye = () => {

	const handleClick = () => {
		socket.emit('letter select', 'GOODBYE')
	}

	return (
		<Button onClick={handleClick}>
			GOODBYE
		</Button>
	)
}

export default Goodbye
