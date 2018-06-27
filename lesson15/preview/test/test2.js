function sayName(name) {
	let message = "My name is " + name;
	return message;
}

let arr = [5, -3, 6, -5, 0, -7, 8, 9];
let result = arr.reduce(function(sum, elem) {
	return sum + elem;
})

let assert = require('chai').assert;

describe("sayName", function() {

	it("Recieve the phrase with new name", function() {
		assert.typeOf(sayName("Stas"), 'string');
	});
});


	describe("sayName", function() {

	it("Recieve the sum of the array's numbers", function() {
		assert.equal(result, 13);
	});
});
