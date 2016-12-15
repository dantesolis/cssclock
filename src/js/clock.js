window.addEventListener('DOMContentLoaded', () => {

/*
* @const hourHand {object}
* @const secondHand {object}
* @const minHand {object}
*/
const hourHand   = document.querySelector('.hand--hour');
const secondHand = document.querySelector('.hand--second');
const minsHand    = document.querySelector('.hand--min');

/*
* @function setDate
* @global
* @const now             {object} - new Date Object
* @const seconds         {object} - seconds of new Date
* @const mins            {object} - mins of new Date
* @const hours           {object} - hour of new Date
* @const secondsDegrees  {number} - seconds in degrees
* @const minsDegrees     {number} - mins in degrees
* @const hoursDegrees    {number} - mins in degrees
*/

function setDate() {
	const now     = new Date()
	const seconds = now.getSeconds();
	const mins    = now.getMinutes();
	const hours   = now.getHours();
	
	const secondsDegrees = ( (seconds / 60) * 360 ) + 90;
	const minsDegrees    = ( (mins / 60) * 360 ) + 90;
	const hoursDegrees   = ( (hours / 12) * 360 ) + 90;
	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minsHand.style.transform   = `rotate(${minsDegrees}deg)`;
	hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;
	
	// console.log(seconds);
	// console.log(hours);
	// console.log(mins);
}

setInterval(setDate, 1000);
})