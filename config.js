const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : '8wT-8aNmTxamD-F_3x6QLQ',
		APISecret : 't9IljoPQGkaMLICUxjugYhNgyyceEggJzu88'
	},
	production:{	
		APIKey : '8wT-8aNmTxamD-F_3x6QLQ',
		APISecret : 't9IljoPQGkaMLICUxjugYhNgyyceEggJzu88'
	}
};

module.exports = config[env]
