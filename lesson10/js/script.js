window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

					function hideTabContent(a) {
							for ( let i = a; i < tabContent.length; i++) {
								tabContent[i].classList.remove('show');
								tabContent[i].classList.add('hide');
							}

}
					hideTabContent(1)

					function showTabContent(b) {
						if(tabContent[b].classList.contains('hide')) {
							hideTabContent(0);
							tabContent[b].classList.remove('hide');
							tabContent[b].classList.add('show');
						}
					}

     info.addEventListener('click', function(event) {
     	let target = event.target;
     	if(target.className == 'info-header-tab') {
     		 for (let i = 0; i < tab.length; i++) {
     		 	if (target == tab[i]) {
     		 		showTabContent(i);
     		 		break;
     		 	}
     		 }
     	};
    });








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
    
//Modal

// let more = document.querySelector('.more'),
//     overlay = document.querySelector('.overlay'),
//     close = document.querySelector('.popup-close');


// more.addEventListener('click', function() {
//      this.classList.add('more-splash');
//      overlay.style.display = "block";
//      document.body.style.overflow = 'hidden';
// });

// close.addEventListener('click', function() {
//      overlay.style.display = "none";
//      more.classList.remove('more-splash');
//      document.body.style.overflow = '';
// });


// let descrBtn = document.getElementsByClassName('description-btn'),
//     descr = document.getElementsByClassName('description');

// // tabContent.addEventListener('click', function(event) {
// //      if(event.target && event.target.className == 'description-btn') {
// //           console.log('hello');
// //      }
// // });


// for(let i = 0; i <= descrBtn.length; i++) {

// descrBtn[i].addEventListener('click', function() {
//      this.classList.add('more-splash');
//      overlay.style.display = "block";
//      document.body.style.overflow = 'hidden';
//      // break;
// })
// }


let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            description_btn = document.querySelectorAll('.description-btn');
            console.log(description_btn);

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    for (let i = 0; i < description_btn.length; i++) {
        description_btn[i].addEventListener('click', function() {
            this.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    create(text) {
    let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
             `
    document.body.appendChild(div);
  }
}

let divCreation = new Options('150px', '50px', 'green', '14px', 'center');
divCreation.create('все работает');


});


// });












