const utils = {

	//Just a utility function to render the data coming back
	generateSuccessHTMLOutput(response) {
		return '<h4>Result</h4>' +
			'<h5>Status:</h5> ' +
			'<pre>' + response.status + ' ' + response.statusText + '</pre>' +
			'<h5>Headers:</h5>' +
			'<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
			'<h5>Data:</h5>' +
			'<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
	},

	//Just a utility function to render the error coming back
	generateErrorHTMLOutput(error) {
		return '<h4>Result</h4>' +
			'<h5>Message:</h5> ' +
			'<pre>' + error.message + '</pre>' +
			'<h5>Status:</h5> ' +
			'<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
			'<h5>Headers:</h5>' +
			'<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
			'<h5>Data:</h5>' +
			'<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
	}
};

export default utils;