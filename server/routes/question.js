const log = require('../util/logger')

module.exports = configureQuestion = (io, socket, store) => {

	socket.on('question suggest', question => {
		// On suggest, if none, set and send to all
		if (!store.question){
			store.question = question
			io.emit('question is', store.question)
		}
	})

	if (store.question){
		// Send the current question to the new client
		socket.emit('question is', store.question)
	}
}
