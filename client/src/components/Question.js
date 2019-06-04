import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './base/Button'
import Input from './base/Input'
import socket from '../global/socket'

const Wrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-around;
`

const Question = props => {

	const [suggestion, setSuggestion] = useState('')

	const { question } = props

	if (question){
	// There is a question, show it
		document.title = question
		return (
			<Wrapper>
				<h1>{question}</h1>
			</Wrapper>
		)
	}

	const handleSubmit = e => {
		if (e){
			e.preventDefault()
		}
		if (suggestion === ""){
			return
		}
		socket.emit('question suggest', suggestion)
		setSuggestion('')
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<Input
					value={suggestion}
					placeholder="Ask oujia a question..."
					onChange={e => setSuggestion(e.target.value)}
				/>
				<Button type="submit" aria-label="" value="Ask!" />
			</form>
		</Wrapper>
	)
}

export default Question
