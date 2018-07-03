window.addEventListener('DOMContentLoaded', function() {

let headerBtn = document.getElementsByClassName('popup_engineer_btn')[0],
				popupEng = document.getElementsByClassName('popup_engineer')[0],
				close = document.getElementsByClassName('popup_close');

headerBtn.addEventListener('click', function() {
	this.classList.add('popup_engineer');
	popupEng.style.display = 'block';
 // document.body.style.overflow = 'hidden';
});


let phoneLink = document.querySelector('.phone_link'),
				popup = document.querySelector('.popup'),
				overlay = document.querySelector('.contact_us_wrap');


phoneLink.addEventListener('click', function() {
	this.classList.add('popup');
	popup.style.display = 'block';
});


for (let i = 0; i < close.length; i++) {
close[i].addEventListener('click', function() {
	console.log('нажал');
 popupEng.style.display = 'none';
 popup.style.display = 'none';
 headerBtn.classList.remove('popup_engineer');
 phoneLink.classList.remove('popup');
 document.body.style.overflow = '';
});

}

// overlay.addEventListener('click', function(a) {
// 	// for(a = a.target; a != popup) {
// 		popup.style.display = 'none';
// 		phoneLink.classList.remove('popup');
// 	// }
// })

let tab = document.getElementsByClassName('glazing_block'),
    tabContent = document.getElementsByClassName('row'),
    info = document.getElementsByClassName('glazing_slider')[0];

// function hideTabContent(a) {
// 							for ( let i = a; i < tabContent.length; i++) {
// 								tabContent[i].classList.remove('show');
// 								tabContent[i].classList.add('hide');
// 							}

// }
// 					hideTabContent(1);

	function showTabContent(b) {
						if(tabContent[b].classList.contains('glazing')) {
							// hideTabContent(0);
							// tabContent[b].classList.add('show');
							tabContent.style.display = 'block';
							// tabContent[b].classList.remove('hide');
							// tabContent[b].classList.add('show');
						}
					}


info.addEventListener('click', function(event) {
     	let target = event.target;
     	if(target.className == 'glazing_block') {
     		 for (let i = 0; i < tab.length; i++) {
     		 	if (target == tab[i]) {
     		 		showTabContent(i);
     		 		break;
     		 	}
     		 }
     	};
    });






let deadline = '2018-07-04';

     function getTimeRemaining(endtime) {
     	  let t = Date.parse(endtime) - Date.parse(new Date()),
     	  seconds = Math.floor( (t/1000) % 60 ),
     	  minutes = Math.floor( (t/1000/60) % 60 ),
     	  hours = Math.floor( (t/(1000*60*60)) ),
     	  days = Math.floor(t/(1000 * 60 * 60 * 24));
     	  t = +t;

     	  return {
     	  	'total': t,
     	  	'days': days,
     	  	'hours': hours,
     	  	'minutes': minutes,
     	  	'seconds': seconds
     	  }

     };

     let timeInterval;

     function setClock(id, endtime) {
     	let timer = document.getElementById(id),
     					days = timer.querySelector('.days')
     					hours = timer.querySelector('.hours'),
     					minutes = timer.querySelector('.minutes'),
     					seconds = timer.querySelector('.seconds');

     					function updateClock() {
     						let t = getTimeRemaining(endtime);
     						days.innerHTML = ("0" + t.days).slice(-2);
     						hours.innerHTML = ("0" + t.hours).slice(-2);
     						minutes.innerHTML = ("0" + t.minutes).slice(-2);
     						seconds.innerHTML = ("0" + t.seconds).slice(-2);

     						if (t.total <= 0) {
     									clearInterval(timeInterval);
     									days.textContent = "00";
     									hours.textContent = "00";
     						   minutes.textContent = "00";
     						   seconds.textContent = "00";

     						}
     					};

     					updateClock();
     					timeInterval = setInterval(updateClock, 1000);

     };

     setClock('timer', deadline);

});

