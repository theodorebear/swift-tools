export const calendarFormats = {
	date: {
		lastDay: "[Yesterday]",
		sameDay: "[Today]",
		nextDay: "[Tomorrow]",
		lastWeek: "[last] dddd",
		nextWeek: "dddd",
		sameElse: "L",
	},
	datetime: {
		lastDay: "[Yesterday at] LT",
		sameDay: "[Today at] LT",
		nextDay: "[Tomorrow at] LT",
		lastWeek: "[last] dddd [at] LT",
		nextWeek: "dddd [at] LT",
		sameElse: "L LT",
	},
}

export function getEasyDate() {
	let date = new Date()
	let year = date.getFullYear()
	let month = (1 + date.getMonth()).toString().padStart(2, "0")
	let day = date.getDate().toString().padStart(2, "0")
	return year + "/" + month + "/" + day
}
