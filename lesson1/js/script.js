var monthBudjet = +prompt("What is your monthly budjet?"),
    shopName = prompt("What is the shop name?"),
    mainList,
    money = monthBudjet/30,
    employersShop,
    goods;


// var i = 0;
// while (i < 3) {
//   var product = prompt( "what kind of goods we are going to sell?" );
//   i++;
// }

alert('Your budjet' +  money)

mainList = {
	money: monthBudjet,
	name: shopName,
	employee: employersShop,
 goods: [], 
 open: true,
}
;

mainList.goods[0] = prompt( "what kind of goods we are going to sell?" );
mainList.goods[1] = prompt( "what kind of goods we are going to sell?" );
mainList.goods[2] = prompt( "what kind of goods we are going to sell?" );


console.log(mainList.goods[0]);
console.log(mainList.goods[1]);
console.log(mainList.goods[2]);


employersShop = {
 name: "John Smith",
 name1: "Garry Oldmen",
	}
;
console.log(employersShop);

// var i = 0;
// while (i < 3) {
//   var product = prompt( "what kind of goods we are going to sell?" );
//   i++;
// }




// prompt("what kind of goods we are going to sell?")