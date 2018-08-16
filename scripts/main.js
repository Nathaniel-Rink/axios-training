import utils from './utils.js';

//Axios file sets it up as a global variable
console.log(axios); //NRHG
console.log(utils); //NRHG

function performGetRequest1() {
console.log('GET REQUEST'); //NRHG
	var $el1 = $('#getResult1');
	$el1.innerHTML('');
}

function performGetRequest2() {
	console.log('request 2'); //NRHG
}