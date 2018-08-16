import utils from './utils.js';

//Axios file sets it up as a global variable
console.log(axios); //NRHG
console.log(utils); //NRHG

$('.axiosGetRequest').click(axiosGetRequest);
$('.javascriptRequest1').click(javascriptRequest1);
$('.performAxiosGetError').click(performAxiosGetError);
$('.axiosGetRequestWParam').click(axiosGetRequestWParam);
$('.performJSGetError').click(performJSGetError);
$('.axiosPostRequest').click(axiosPostRequest);
$('.clearOutput').click(clearOutput);

//Clear out the result divs
function clearOutput(){
	$('#getResult1, #getResult2, #postResult').html('');
}


/*** SIMPLE GET ***/


//Move the common block and tackle stuff out of the axios vs js gets
function prepGetRequest(generateError){
	const jsonPlaceholder = 'http://jsonplaceholder.typicode.com/todos';
	let url = generateError ? jsonPlaceholder + 'nrhg' : jsonPlaceholder;


	//Clear out destination box
	const $el = $('#getResult1');
	$el.html('');

	return {
		url: url,
		el: $el
	};
}


//18 lines for axios GET
function axiosGetRequest(evt, generateError) {
	const obj = prepGetRequest(generateError);
	const url = obj.url;
	const $el = obj.el;

	//Use axios to get the endppoint and return a promise
	axios.get(url)

	//Respond to a successful promise
		.then(function (response) {
			console.log('entry'); //NRHG
			$el.html(utils.generateSuccessHTMLOutput(response));
		})

		//Respond to an error
		.catch(function (error) {
			$el.html(utils.generateErrorHTMLOutput(error));
		});
}

//31 lines for js GET
function javascriptRequest1(evt, generateError) {

	const obj = prepGetRequest(generateError);
	const url = obj.url;
	const $el = obj.el;

	//Create a new request
	var xhttp = new XMLHttpRequest();

	//Set a watcher
	xhttp.onreadystatechange = function() {

		//Note that watcher fires several times before we are ready to handle it (promise only fires once)
		console.log(this.readyState); //NRHG

		//Infer whether it's a successful call
		if (this.readyState == 4 && this.status == 200) {

			// Respond to successful call with request[responseText]
			$el.html(utils.generateSuccessHTMLOutput(xhttp.responseText));
		}
		//Infer if it's an unsuccessful call
		if(this.readyState == 4 && this.status != 200){
			$el.html(utils.generateErrorHTMLOutput(xhttp));
		}
	};

	//More steps to start the call
	xhttp.open('GET', url, true);
	xhttp.send();
}

//Trigger errors
function performAxiosGetError() {
	axiosGetRequest(true);
}
function performJSGetError() {
	javascriptRequest1(true);
}


/*** GET W PARAM ***/


//Move the common block and tackle stuff out of the axios vs js gets
function prepGetRequestWParam(){
	const jsonPlaceholder = 'http://jsonplaceholder.typicode.com/todos';
	let url = generateError ? jsonPlaceholder + 'nrhg' : jsonPlaceholder;


	//Clear out destination box
	const $el = $('#getResult2');
	$el.html('');

	//Get input
	const id = $('#todoId').val();

	return {
		url: url,
		el: $el,
		id: id
	};
}

//Axios adds params with just an additional option
function axiosGetRequestWParam() {
	const obj = prepGetRequestWParam();
	const url = obj.url;
	const id = obj.id;
	const $el = obj.el;
	axios.get(url, {
		params: {
			id: id
		}
	})
		.then(function (response) {
			console.log(response);
			$el.html(utils.generateSuccessHTMLOutput(response));
		})
		.catch(function (error) {
			$el.html(utils.generateErrorHTMLOutput(error));
		});
}


/*** POST */
function axiosPostRequest(event){
	const $el = $('#postResult');
	const myInput = $('#todoTitle').val();
	const url = 'http://jsonplaceholder.typicode.com/todos';

	$el.html('');

	axios.post(url, {
		userId: '1',
		title: myInput,
		completed: false
	})
		.then(function(response){
			console.log(response); //NRHG
			$el.html(utils.generateSuccessHTMLOutput(response));
		})
		.catch(function(error){
			$el.html(utils.generateErrorHTMLOutput(error));
		});

	event.preventDefault();
}