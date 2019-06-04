import React, { useState, useEffect } from 'react'

import Question from './components/Question'
import socket from './global/socket'

function App() {
	const [question, setQuestion] = useState(null)

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

	return (
		<main>
			<Question question={question} />
		</main>
	)
}

export default App;
