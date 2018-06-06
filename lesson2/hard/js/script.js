let css = {
	'bold': 'font: 1.3rem/3 Georgia;',
	// 'italic':  
}


let week = ['monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday', 'sunday',];

console.log('%c%s', 'font-style: italic;', week[0]);
console.log(week[1]);
console.log(week[2]);
console.log(week[3]);
console.log(week[4]);
console.log('%c%s', 'font-weight: bold;', week[5]);
console.log('%c%s', 'font-weight: bold;', week[6]);



let arr = [ 3131231, 3999911, 5749739, 8899993, 77777833, 2121212, 9910000 ];

let arr3 = arr.filter(function(number) {
return number > 3;
});

console.log(arr3);


// mainList.goods[i]