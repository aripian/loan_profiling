# loan_profiling
Simple Loan Profiling System

Language: Javascript
Framework: NodeJS
Database: Postgres

Example data to send:
{
	"name": "Arif",
	"email": "test@test.com",
	"idNo": "900304011111", <-- This is fake btw
	"options": {
		"savings": 4000,
		"loans": 0
	}
}

You can add more option under option, but remember to change mapping inside /config/options.
