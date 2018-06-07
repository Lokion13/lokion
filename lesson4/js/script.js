let monthBudjet,
    shopName,
    money,
    employersShop = {},
    time,
    price = 100;
let goods;

function start() {
  monthBudjet = +prompt("What is your monthly budjet?", '');
  while (isNaN(monthBudjet) || monthBudjet == '' || monthBudjet == null) {
    monthBudjet = +prompt("What is your monthly budjet?", '');
  }
  shopName = prompt("What is the shop name?", '').toUpperCase();
  time = 19;
};

start();


let mainList = {
  // budjet: dayBudjet,
  shopName: shopName,
  employersShop: {},
  goods: [], 
  open: false,
  discount: true,
  shopItems: [],
  chooseGoods: function chooseGoods() {
   for (let i = 0; i < 5; i++) {

   let a = prompt( "what kind of goods we are going to sell?", '' );

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
     console.log("все верно");
     mainList.goods[i] = a;
    } else {
       i--;
    }
   }
  },
  workTime: function workTime(time) {

   if (time < 0) {
    console.log('Это невозможно');
   } else if(time > 8 && time < 20) {
      console.log('Рабочее время');
      mainList.open = true;
   } else if(time < 24) {
      console.log('Уже слишком поздно');
   } else {
      console.log('в сутках всего 24 часа');
   }
  },
  dayBudjet: function dayBudjet() {
   alert(monthBudjet/30);
  },
  discountPrice: function discountPrice() {
   if (discount = true) {
    price = price * 0.8;
    alert('The price after discount' + price);
    }
  },
  hireEmployees: function hireEmployees() {
   for (let i = 0; i < 4; i++) {
    let a = prompt( "Write the new employee's name?", '' );
     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
      console.log("все верно");
      mainList.employersShop[i] = a;
     } else {
        console.log("неверно");
        i--;
     }
    }
  },
  chooseShopItem: function chooseShopItem() {
    for ( i = 1; i < 2; i++) {
      let items = prompt("List all the items using coma", '');
     if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
       mainList.shopItems = items.split(",");
       mainList.shopItems.push(prompt("Wait, one more item ", ""));
       mainList.shopItems.sort();
       mainList.shopItems.forEach(function(item, i, shopItems) {
       alert(" We could suggest you such items as: " + i + item );
       });
       console.log(" ну можешь же");
     } else {
       i--;
     }
   }
  }
}
;

for( let key in mainList.shopItems) {
  console.log("Our shop includes: " + key + mainList.shopItems[key]);
};
console.log(mainList);


// alert(i + " We could suggest you such items as: " + item );
