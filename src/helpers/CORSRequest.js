export function GETCORSRequest(url, data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers){
	CORSRequest(url, 'GET', data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers)
}
export function POSTCORSRequest(url, data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers){
	CORSRequest(url, 'POST', data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers)
}
export function PATCHCORSRequest(url, data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers){	
	CORSRequest(url, 'PATCH', data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers)
}
export function DELETECORSRequest2(url, data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers){
	CORSRequest(url, 'DELETE', data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers)	
}

function CORSRequest(url, method, data, onFetchSuccess, onFetchFailure, custom_inits, custom_headers){
	let i,key,value;
	let headers= {
		'Access-Control-Allow-Origin':'*',
		'Accept':'application/json',
	    'Content-Type':'application/json'
	};
	let init = {
		method: method,
		mode: 'cors',
		headers: headers,
		body: data
	}; 
	if (custom_inits) {
		for (i = 0; i < custom_inits.length; i++) {
			key = custom_inits[i].key;
			value = custom_inits[i].value;
			init[key] = value;
		}
	}
	if (custom_headers) {
		for (i = 0; i < custom_headers.length; i++) {
			key = custom_headers[i].key;
			value = custom_headers[i].value;
			headers[key] = value;
		}
	}

	fetch(url, init)
		.then(function (response) {
			if (response.status >= 400) {
				if (onFetchFailure) {
					onFetchFailure(response);
					throw Error(response.statusText);
				}
			}
			else {
				let contentType = response.headers.get("content-type");
				if (contentType && contentType.indexOf("application/json") !== -1) {
					return response.json()
				} else {
					return response.text();
				}
			}
		})
		.then(function (data) {
			let json_data = data
			//Ưu tiên convert sang JSON Object nếu kết quả là string
			if(typeof data === 'string'){
				try {
					json_data = JSON.parse(data)
				} catch (error){
					throw Error("this string can't convert to JSON")
				}
			}
			if (onFetchSuccess) {
				onFetchSuccess(json_data);
			}
		})
		.catch(function (error) {
			if (onFetchFailure) {
				console.log(error)
				onFetchFailure(error);
			}
		});
}