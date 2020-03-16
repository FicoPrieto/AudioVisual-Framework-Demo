module.exports = {

  rootDir: "../../__Source__",

  preset:          "ts-jest",
  testEnvironment: "node",

  testMatch: [
    "<rootDir>/**/Test.*.ts",
    "<rootDir>/**/*.Test.ts",
    "<rootDir>/**/__Test__.ts",
    "<rootDir>/**/__Test__/**/*.ts",
  ],

	moduleNameMapper: {
		"^~\/(.*)$":    "<rootDir>/$1",
		"^Root\/(.*)$": "<rootDir>/$1",
		"^@\/(.*)$":    "<rootDir>/__Modules__/$1",
		"^Settings$":   "<rootDir>/__Main__/Settings.json",
	},

}
