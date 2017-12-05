/* Fuencines JavaScript
Versiones:0.0.1 - 0.0.6 todas las Versiones implementadas*/

//Aquí llamamos los Eventos
document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);

//  Esta función imprime tweets junto con su hora en la que fuero publicado
function showTweet() {
	document.getElementById('tweets').style.display = 'block';//Imprimir los tweets uno debajo de otro
	var tweet = document.getElementById('tweet').value;//Obtiene el valor del textarea
	var pTweet = document.createElement('p');
	pTweet.className = "tweet-content";
	pTweet.innerHTML = tweet;//Pasamos el valor tomado en la línea 11
	//Implementar función fecha
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var finalHour = hour + ':'+ minutes;//Se concatenan horas y minutos
	/*Trying moment.js -- fail*/
	// var date = '2017-12-04';
	// var format = 'LLLL';
	// var result = moment(date).format(format);

	var tweetHour = document.createElement('p');//Creamos el elemento (p) para asignar la hora
	tweetHour.innerHTML = finalHour;
	var tweetContainer = document.createElement('article');
	tweetContainer.className = "tweet";
	tweetContainer.className = 'tweet-background';
	tweetContainer.appendChild(pTweet);
	tweetContainer.appendChild(tweetHour);//Indicamos que tweet y tweetHour son hijos de tweetContainer
	document.getElementById("tweets").appendChild(tweetContainer);
	document.getElementById('tweet').value = "";
	document.getElementById('available-characters').innerHTML = '140';
	console.log(document.getElementById('tweets'));
}

//Creamos la función del contador
function availableCharacters() {
	var tweet = document.getElementById('tweet').value;
	var availableCharacters = 140 - tweet.length;
	//Si los caracteres son mayor a cero el bon se activa
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	if (tweet.length > 0) {
		document.getElementById('submit-tweet').className = 'active';
	}
	document.getElementById('submit-tweet').className = 'active';
	document.getElementById('available-characters').innerHTML = availableCharacters;
	//Implementación de condicional ternario en sustitución del if
	//Si los caracteres son menor a cero el botón se desactiva
  document.getElementById('submit-tweet').disabled = availableCharacters <= 0 ? true : false;
	if(availableCharacters <= 20 && availableCharacters > 10) {
		document.getElementById('available-characters').style.color = 'red';
	} else if (availableCharacters <= 10) {
		document.getElementById('available-characters').style.color = 'blue';
	}
}
