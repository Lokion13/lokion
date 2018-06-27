// let assert = require('chai').assert;

describe("sum", function(){
	it("Возвращает ли true?", function(){
		assert.equal(sum(2,2), true);
	});
});


describe("num", function(){
	it("Равна ли 5?", function(){
		assert.equal(arr[1][1], 5);
	});
});

describe("проверка each на тип данных", function(){
	it("что вернет each?", function(){
		assert.typeOf(each, 'function');
	});
});


describe("проверка each на длину", function(){
	it("each длинна раван 5?", function(){
		assert.lengthOf(arr, 5);
	});
});


describe("проверка each на результат", function(){
	it("что вернет each в качестве результата?", function(){
		assert.deepEqual(each(arr, myFunc), [8, 7, 6, 5, 4]);
	});
});
// let testArray = [8, 7, 6, 5, 4];
// let newArray = each(arr, myFunc);

// describe('each', function() {
//     it ('Ожидаем массив', function() {
//         assert.deepEqual(newArray, testArray);
//     });
// });

// 



// describe('Общая сумма', function(){
	// 	it('Изначально равен 0', function() {
	// 	assert.equal(total, 0);
	// })
	// })
// each(arr, myFunc








// function sayName(name) {
// 	let message = "My name is " + name;
// 	return message;
// }

// let arr = [5, -3, 6, -5, 0, -7, 8, 9];
// let result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// })

// let assert = require('chai').assert;

// describe("sayName", function() {

// 	it("Recieve the phrase with new name", function() {
// 		assert.typeOf(sayName("Stas"), 'string');
// 	});
// });


// 	describe("sayName", function() {

// 	it("Recieve the sum of the array's numbers", function() {
// 		assert.equal(result, 13);
// 	});
// });
