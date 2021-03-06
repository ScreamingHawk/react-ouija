const log = require('../util/logger')

module.exports = configureLetter = (io, socket, store) => {
	socket.on('letter select', letter => {
		if (store.blocked){
			// Blocked
			log.debug('Race condition...')
			return
		}
		if (letter.toLowerCase() === 'goodbye'){
			// Complete answer
			store.history.push({
				question: store.question,
				answer: store.answer,
			})
			store.question = null
			store.blocked = false
			log.info(`Answer: ${store.answer}`)
			// Emit
			io.emit('goodbye')
			io.emit('question is', '')
			io.emit('history is', store.history)
			io.emit('user blocked', false)
			return
		}
		if (store.lastLetterId !== socket.id){
			// New person must pick
			io.to(store.lastLetterId).emit('user blocked', false)
			// Block out other people for a short time
			store.blocked = true
			setTimeout(() => {
				store.blocked = false
			}, 2500)
			// Update
			store.lastLetterId = socket.id
			socket.emit('user blocked', true)
			letter = letter[0]
			log.info(`Adding letter: ${letter}`)
			store.answer += letter
			// Emit
			io.emit('answer is', store.answer)
		} else {
			log.debug('Someone retrying...')
		}
	})

	if (store.answer){
		// Send the current answer to the new client
		socket.emit('answer is', store.answer)
	}
	// Send the history
	socket.emit('history is', store.history)
}
