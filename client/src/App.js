import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Answer from './components/Answer'
import Board from './components/Board'
import Question from './components/Question'
import socket from './global/socket'
import ghostLogo from './assets/ghost.png'

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const GhostImg = styled.img.attrs({
	src: ghostLogo,
	alt: 'ghost',
})`
	max-width: 200px;
`

const App = () => {
	const [question, setQuestion] = useState(null)
	const [lastQ, setLastQ] = useState(null)
	const [answser, setAnswer] = useState('')

	useEffect(() => {
		// Listen for question
		socket.on('question is', q => {
			console.log(`Setting question to ${q}`)
			setQuestion(q)
		})

		// Unsub
		return () => {
			socket.off('question is')
		}
	})

	useEffect(() => {
		// Listen for goodbye
		socket.on('goodbye', () => {
			console.log(`Goodbye`)
			setLastQ(question)
		})

		// Unsub
		return () => {
			socket.off('goodbye')
		}
	})

	useEffect(() => {
		// Listen for answer
		socket.on('answer is', a => {
			console.log(`Setting answer to ${a}`)
			setAnswer(a)
		})

		// Unsub
		return () => {
			socket.off('answer is')
		}
	})

	return (
		<Wrapper>
			<GhostImg />
			<Question question={question} lastQ={lastQ} />
			<Answer answer={answser} />
			{ question && (
				<Board />
			)}
		</Wrapper>
	)
}

export default App;
