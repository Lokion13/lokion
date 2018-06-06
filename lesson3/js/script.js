let monthBudjet,
    shopName,
    // mainList,
    money,
    employersShop = {},
    // goods,
    time,
    price;
let goods;

function start() {
  monthBudjet = +prompt("What is your monthly budjet?");
  while (isNaN(monthBudjet) || monthBudjet == '' || monthBudjet == null) {
    monthBudjet = +prompt("What is your monthly budjet?");
  }
  shopName = prompt("What is the shop name?").toUpperCase();
  time = 19;
};

start();

function dayBudjet() {
  // money = monthBudjet/30;
  return monthBudjet/30;
}

alert(dayBudjet);


function hireEmployees() {
  for (let i = 0; i < 4; i++) {
    let a = prompt( "Write the new employee's name?" );
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
     console.log("все верно");
     employersShop.name{i} = i + a;
   } else {
   console.log("неверно");
  }
}
};
hireEmployees();
// dayBudjet();

// var i = 0;
// while (i < 3) {
//   var product = prompt( "what kind of goods we are going to sell?" );
//   i++;
// }

// alert('Your budjet' +  monthBudjet/30)

let mainList = {
	budjet: dayBudjet,
	shopName: shopName,
	employersShop: {},
  goods: [], 
  open: false,
  discount: false,
}
;

function chooseGoods() {
 for (let i = 0; i < 5; i++) {

	 let a = prompt( "what kind of goods we are going to sell?" );

	 if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		 console.log("все верно");
		 mainList.goods[i] = a;
	 } else {
   console.log("неверно");
		// mainList.goods[i] = a;
	 }
}
};

chooseGoods();



// let i = 0;
//  while (i < 5) {
//  	let a = prompt( "what kind of goods we are going to sell?" );
//  	i++;
//  	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
// 		console.log("все верно");
// 		mainList.goods[i] = a;
// 	} else {
//   console.log("неверно");
// 	}
// };


// let i = 0;
// do {
// 	let a = prompt( "what kind of goods we are going to sell?" );
//  i++;
//  console.log("все верно");
// 	mainList.goods[i] = a;
// } while (i < 5) {
//  	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
// 	} else {
//   console.log("неверно");
// 	}
// };




// for (let i = 0; i < 5; i++) {

// 	let a = prompt( "what kind of goods we are going to sell?" );

//  switch (a) {
//  	case ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50):
//  	console.log("получилось");
//   mainList.goods[i] = a;
//   break;
// }
// }

function workTime(time) {

if (time < 0) {
	console.log('Это невозможно');
} else if(time > 8 && time < 20) {
 console.log('Рабочее время');
 } else if(time < 24) {
 	 console.log('Уже слишком поздно');
  } else {
  	 console.log('в сутках всего 24 часа');
  }
};

workTime(18);
// mainList.goods[0] = prompt( "what kind of goods we are going to sell?" );
// mainList.goods[1] = prompt( "what kind of goods we are going to sell?" );
// mainList.goods[2] = prompt( "what kind of goods we are going to sell?" );

console.log(mainList);
