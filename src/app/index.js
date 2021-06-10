function getMyData() {

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/lilindian14%25231756/battle",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "3f4b8156f4msh96d515818424e6ep1a335bjsna27d1d384af9",
			"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);

		var statBlob = document.getElementById('statsJSON');
		var errorMessage = "Error? " + response.error + "<br>";
		statBlob.innerHTML = (errorMessage + response.message);
	});
}


getMyData();