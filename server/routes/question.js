const log = require('../util/logger')

module.exports = configureQuestion = (io, socket, store) => {

	socket.on('question suggest', question => {
		// On suggest, if none, set and send to all
		if (!store.question){
			store.question = question
			log.info(`Question: ${store.question}`)
			// Clear stuff
			store.lastLetterId = null
			store.answer = ''
			// Emit
			io.emit('question is', store.question)
			io.emit('answer is', store.answer)
		}
	})

	if (store.question){
		// Send the current question to the new client
		socket.emit('question is', store.question)
	}
}
