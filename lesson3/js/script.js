let monthBudjet,
    shopName,
    money,
    employersShop = {},
    time,
    price = 100;
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
  alert(monthBudjet/30);
}
;

let mainList = {
  budjet: dayBudjet,
  shopName: shopName,
  employersShop: {},
  goods: [], 
  open: false,
  discount: true,
}
;

function hireEmployees() {
  for (let i = 0; i < 4; i++) {
    let a = prompt( "Write the new employee's name?" );
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
     console.log("все верно");
     mainList.employersShop[i] = a;
   } else {
   console.log("неверно");
   i--;
  }
}
};

hireEmployees();

function discountPrice() {
  if (discount = true) {
    price = price * 0.8;
    alert('The price after discount' + price);
  }
}
;
discountPrice();


function chooseGoods() {
 for (let i = 0; i < 5; i++) {

	 let a = prompt( "what kind of goods we are going to sell?" );

	 if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		 console.log("все верно");
		 mainList.goods[i] = a;
	 } else {
   console.log("неверно");
	 }
}
};

chooseGoods();



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

workTime();
// mainList.goods[0] = prompt( "what kind of goods we are going to sell?" );
// mainList.goods[1] = prompt( "what kind of goods we are going to sell?" );
// mainList.goods[2] = prompt( "what kind of goods we are going to sell?" );

console.log(mainList);
