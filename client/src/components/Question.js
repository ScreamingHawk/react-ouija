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

const LastQ = styled.h2`
	font-style: italics;
`

const Question = props => {

	const [suggestion, setSuggestion] = useState('')

	const { question, lastQ } = props

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
		<div>
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
			<Wrapper>
				<LastQ>{lastQ}</LastQ>
			</Wrapper>
		</div>
	)
}

export default Question
