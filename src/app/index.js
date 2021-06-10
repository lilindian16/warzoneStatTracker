

const http = require("https");

function getMyData() {
	
	const options = {
		"method": "GET",
		"hostname": "call-of-duty-modern-warfare.p.rapidapi.com",
		"port": null,
		"path": "/warzone/lilindian14%25231756/battle",
		"headers": {
			"x-rapidapi-key": "3f4b8156f4msh96d515818424e6ep1a335bjsna27d1d384af9",
			"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
			"useQueryString": true
		}
	};
	const req = http.request(options, function (res) {
		const chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
			const body = Buffer.concat(chunks);
			console.log(body.toString());

			var statsBlob = document.getElementById('statsJSON');
			statsBlob.innerHTML = body.toString();
		});
	});

	req.end();

}


getMyData();