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
// 					hideTabContent(1)

	function showTabContent(b) {
						if(tabContent[b].classList.contains('hide')) {
							// hideTabContent(0);
							tabContent[b].classList.remove('hide');
							tabContent[b].classList.add('show');
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


});



 // let tab = document.getElementsByClassName('info-header-tab'),
// 	    tabContent = document.getElementsByClassName('info-tabcontent'),
// 	    info = document.getElementsByClassName('info-header')[0];

// 					function hideTabContent(a) {
// 							for ( let i = a; i < tabContent.length; i++) {
// 								tabContent[i].classList.remove('show');
// 								tabContent[i].classList.add('hide');
// 							}

// }
// 					hideTabContent(1)

// 					function showTabContent(b) {
// 						if(tabContent[b].classList.contains('hide')) {
// 							hideTabContent(0);
// 							tabContent[b].classList.remove('hide');
// 							tabContent[b].classList.add('show');
// 						}
// 					}

    //  info.addEventListener('click', function(event) {
    //  	let target = event.target;
    //  	if(target.className == 'info-header-tab') {
    //  		 for (let i = 0; i < tab.length; i++) {
    //  		 	if (target == tab[i]) {
    //  		 		showTabContent(i);
    //  		 		break;
    //  		 	}
    //  		 }
    //  	};
    // });






// var doc = document,
// 35
//             div = doc.getElementById("divwin4");
// 36
//         doc.onclick = function(a) {
// 37
//             for (a = a.target; a != doc;) {
// 38
//                 if ("closeButton" == a.id) {
// 39
//                     div.style.display = "none";
// 40
//                     return
// 41
//                 }
// 42
//                 if ("btopen" == a.id) {
// 43
//                     div.style.display = "block";
// 44
//                     return
// 45
//                 }
// 46
//                 if ("divwin4" == a.id) return;
// 47
//                 a = a.parentNode
// 48
//             }
// 49
//             div.style.display = "none"
// 50
//         };






//







// let more = document.querySelector('.more'),
//             overlay = document.querySelector('.overlay'),
//             close = document.querySelector('.popup-close'),
//             description_btn = document.querySelectorAll('.description-btn');
//             console.log(description_btn);

//     more.addEventListener('click', function() {
//         this.classList.add('more-splash');
//         overlay.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     });

//     close.addEventListener('click', function() {
//         overlay.style.display = 'none';
//         more.classList.remove('more-splash');
//         document.body.style.overflow = '';
//     });

//     for (let i = 0; i < description_btn.length; i++) {
//         description_btn[i].addEventListener('click', function() {
//             this.classList.add('more-splash');
//             overlay.style.display = 'block';
//             document.body.style.overflow = 'hidden';
//         });
//     }
