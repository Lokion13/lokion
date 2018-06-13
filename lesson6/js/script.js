let open = document.getElementById("open-btn"),
    mainInfo = document.getElementsByClassName('main-info'),
    name = document.getElementsByClassName('name'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budjetValue = document.getElementsByClassName('budget-value')[0],
    goods = document.getElementsByClassName('goods'),
    goodsValue = document.getElementsByClassName('goods-value')[0],
    items = document.getElementsByClassName('items'),
    itemsValue = document.getElementsByClassName('items-value')[0],
    employers = document.getElementsByClassName('employers'),
    employersValue = document.getElementsByClassName('employers-value')[0],
    discount = document.getElementsByClassName('discount'),
    discountValue = document.getElementsByClassName('discount-value')[0],
    isOpen = document.getElementsByClassName('isopen'),
    isOpenValue = document.getElementsByClassName('isopen-value')[0],
    goodsItem = document.getElementsByClassName('goods-item'),
    goodsButton = document.getElementsByClassName('goods-item-btn')[0],
    chooseItem = document.querySelector('.choose-item'),
    time = document.querySelector('.time'),
    timeValue = document.querySelector('.time-value'),
    budjetDayValue = document.querySelector('.count-budget-value').readOnly = true,
    budjetBtn = document.querySelector('.count-budget-btn'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
    hireEmployersBtn = document.querySelector('.hire-employers-btn');




let monthBudjet,
    shopName,
    money,
    employersShop = {},
    price = 100;
// let goods;



open.addEventListener('click', () => {
  monthBudjet = +prompt("What is your monthly budjet?", '');
  while (isNaN(monthBudjet) || monthBudjet == '' || monthBudjet == null) {
    monthBudjet = +prompt("What is your monthly budjet?", '');
  }
  shopName = prompt("What is the shop name?", '').toUpperCase();
  budjetValue.textContent = monthBudjet;
  nameValue.textContent = shopName;
});

goodsButton.addEventListener( 'click', () => {
  for (let i = 0; i < goodsItem.length; i++) {

   let a = goodsItem[i].value;

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
     console.log("все верно");
     mainList.goods[i] = a;
     goodsValue.textContent = mainList.goods;
    } else {
       i--;
    }
   }
});

chooseItem.addEventListener('change', () => {
      let items = chooseItem.value;
     if ((typeof(items)) === 'string' && items != '') {
       mainList.shopItems = items.split(",");
       mainList.shopItems.sort();
       console.log(" ну можешь же");
       itemsValue.textContent = mainList.shopItems;
     } 
});

timeValue.addEventListener('change', () => {
  let time = timeValue.value;
    if (time < 0) {
    console.log('Это невозможно');
    mainList.open = false;
   } else if(time > 8 && time < 20) {
      console.log('Рабочее время');
      mainList.open = true;
   } else if(time < 24) {
      console.log('Уже слишком поздно');
      mainList.open = false;
   } else {
      console.log('в сутках всего 24 часа');
      mainList.open = false;
   };
   if(mainList.open == true) {
    isOpenValue.style.backgroundColor = 'green';
   }
   else {
    isOpenValue.style.backgroundColor = 'red';
   };

   if(time > 8 && time < 20 && goodsItem != '' && timeValue != '') {
    goodsButton.disabled = false;
   } else if (time > 8 && time < 20 && hireEmployersItem != '' && timeValue != '') {
    hireEmployersBtn.disabled = false;
   } else {
    goodsButton.disabled = true;
    hireEmployersBtn.disabled = true;
   }

});

budjetBtn.addEventListener('click', () => {
  budjetDayValue.value = monthBudjet/30;
});

// budjetDayValue.readOnly = true;

hireEmployersBtn.addEventListener('click', () => {
  for (let i = 0; i < hireEmployersItem.length; i++) {
    let a = hireEmployersItem[i].value;
     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
      console.log("все верно");
      mainList.employersShop[i] = a;
      employersValue.textContent += mainList.employersShop[i] + ', ';
     } 
    }
});





// price.addEventListener('change', () => {
//   if (price >= 100) {
//     price = price * 0.8;
//     discount = true;
//   };
//   if (discount = true) {
//     discountValue.style.backgroundColor = 'green';
    
//     } else {
//     discountValue.style.backgroundColor = 'red';
//    }
// });



let mainList = {
  // budjet: dayBudjet,
  shopName: shopName,
  employersShop: {},
  goods: [], 
  open: false,
  discount: false,
  shopItems: [],
 
  
  
  
  
}
;

for( let key in mainList.shopItems) {
  console.log("Our shop includes: " + key + mainList.shopItems[key]);
};
console.log(mainList);


// alert(i + " We could suggest you such items as: " + item );



timeValue.addEventListener('change', () => {
  let time = timeValue.value;
    if (time < 0) {
    console.log('Это невозможно');
    mainList.open = false;
   } else if(time > 8 && time < 20) {
      console.log('Рабочее время');
      mainList.open = true;
   } else if(time < 24) {
      console.log('Уже слишком поздно');
      mainList.open = false;
   } else {
      console.log('в сутках всего 24 часа');
      mainList.open = false;
   };
   if(mainList.open == true) {
    isOpenValue.style.backgroundColor = 'green';
   }
   else {
    isOpenValue.style.backgroundColor = 'red';
   }

});
