function timer() {
	let deadline = '2018-05-20';

     function getTimeRemaining(endtime) {
     	  let t = Date.parse(endtime) - Date.parse(new Date()),
     	  seconds = Math.floor( (t/1000) % 60 ),
     	  minutes = Math.floor( (t/1000/60) % 60 ),
     	  hours = Math.floor( (t/(1000*60*60)) );
     	  t = +t - 2160000;

     	  return {
     	  	'total': t,
     	  	'hours': hours,
     	  	'minutes': minutes,
     	  	'seconds': seconds
     	  }

     };

     let timeInterval;

     function setClock(id, endtime) {
     	let timer = document.getElementById(id),
     					hours = timer.querySelector('.hours'),
     					minutes = timer.querySelector('.minutes'),
     					seconds = timer.querySelector('.seconds');

     					function updateClock() {
     						let t = getTimeRemaining(endtime);
     						hours.innerHTML = ("0" + t.hours).slice(-2);
     						minutes.innerHTML = ("0" + t.minutes).slice(-2);
     						seconds.innerHTML = ("0" + t.seconds).slice(-2);

     						if (t.total <= 0) {
     									clearInterval(timeInterval);
     									hours.textContent = "00";
     						   minutes.textContent = "00";
     						   seconds.textContent = "00";

     						}
     					};

     					updateClock();
     					timeInterval = setInterval(updateClock, 1000);

     };

     setClock('timer', deadline);
}

module.exports = timer;