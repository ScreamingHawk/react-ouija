import React, { useState } from 'react'
import styled from 'styled-components'

import Goodbye from './Goodbye'
import Letter from './Letter'
import Input from './base/Input'
import Button from './base/Button'

import { MOBILE_BREAKPOINT } from '../global/constants'
import socket from '../global/socket'

const Wrapper = styled.main`
	margin-top: 2em;
	@media (min-width: ${MOBILE_BREAKPOINT + 'px'}) {
		font-size: 1.5em;
	}
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const Row = styled.div`
	display: flex;
	justify-content: center;
	max-width: 100%;
`

const DesktopBoard = () => {
	const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

	return (
		<Wrapper>
			{ rows.map((row, i) => (
				<Row key={i}>
					{ row.split('').map(l => (
						<Letter key={l} letter={l} />
					))}
				</Row>
			))}
			<Row>
				<Goodbye />
			</Row>
		</Wrapper>
	)
}

const MobileBoard = () => {

	const [letter, setLetter] = useState('')

	const handleSubmit = e => {
		if (e){
			e.preventDefault()
		}
		if (letter === ""){
			return
		}
		socket.emit('letter select', letter)
		setLetter('')
	}

	return (
		<Wrapper>
			<Row>
				<form onSubmit={handleSubmit}>
					<Input
						value={letter}
						placeholder="Type letter..."
						onChange={e => setLetter(e.target.value.slice(-1))}
					/>
					<Button type="submit" aria-label="" value="&rarr;" />
				</form>
			</Row>
			<Row>
				<Goodbye />
			</Row>
		</Wrapper>
	)
}

const Board = () => {
	console.log(window.innerWidth)
	if (window.innerWidth >= MOBILE_BREAKPOINT){
		return DesktopBoard()
	}
	return MobileBoard()
}

export default Board
