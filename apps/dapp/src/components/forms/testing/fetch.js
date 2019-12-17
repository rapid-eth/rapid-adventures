export async function postData(url = '', data = {}) {
	// Default options are marked with *
	try {
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		// console.log(await response.json(), 'responseresponse');
		return await response.json(); // parses JSON response into native JavaScript objects
	} catch (error) {}
}
