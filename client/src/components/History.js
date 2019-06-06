import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import socket from '../global/socket'

const Wrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`

const Row = styled.div`
	display: flex;
	justify-content: center;

	& * {
		padding: 0 0.5em;
	}
`

const Red = styled.span`
	color: red;
`

const History = () => {

	const [history, setHistory] = useState([])

	useEffect(() => {
		// Listen for history
		socket.on('history is', c => {
			setHistory(c)
		})

		// Unsub
		return () => {
			socket.off('history is')
		}
	})

	return (
		<Wrapper>
			<p>Answers from spirits of the past</p>
			{ history.map((h, i) => (
				<Row key={i}>
					<b>{h.question}</b>
					<Red>{h.answer}</Red>
				</Row>
			))}
		</Wrapper>
	)
}

export default History
