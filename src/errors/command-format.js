const FriendlyError = require('./friendly');

/**
 * Has a descriptive message for a command not having proper format
 * @extends {FriendlyError}
 */
class CommandFormatError extends FriendlyError {
	/**
	 * @param {CommandMessage} msg - The command message the error is for
	 * @param {?string} errorMessage - Optional error message
	 */
	constructor(msg, errorMessage = 'Invalid command usage') {
		super(
			`${errorMessage}. The \`${msg.command.name}\` command's accepted format is: ${msg.usage(
				msg.command.format,
				msg.guild ? undefined : null,
				msg.guild ? undefined : null
			)}. Use ${msg.anyUsage(
				`help ${msg.command.name}`,
				msg.guild ? undefined : null,
				msg.guild ? undefined : null
			)} for more information.`
		);
		this.name = 'CommandFormatError';
	}
}

module.exports = CommandFormatError;
