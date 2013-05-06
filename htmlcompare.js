var request = require("request"),
	fs = require("fs"),
	obj = JSON.parse(fs.readFileSync("config.json", "utf8")),
	length = obj.length,
	scenario,
	i = 0;


for (;scenario = obj[i++];)
request(scenario.url).pipe(fs.createWriteStream(scenario.file));
