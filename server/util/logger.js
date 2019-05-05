const {
	transports,
	createLogger,
	format
} = require('winston')

module.exports = logger = createLogger({
	level: 'debug',
	format: format.combine(
		format.timestamp(),
		format.printf(info => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`)
	),
	transports: [
		new transports.Console()
	]
})
