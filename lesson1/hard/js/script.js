// var strNum = prompt("Введите число", "");
// var result = 0;
 
// // Простой вариант, если число в виде строки
// for (var i = 0; i < strNum.length; i++)
//   result *= Number(strNum[i]);
 
// console.log(result);
  
// Вариант с числами
var nums = 33721;
var length = nums.length;      // Количество цифр
nums = Number(nums);           // Переводим строку в число
 
var temp = 0;                  // Для хранения цифр
var result = 0;                // Конечный результат
 
for (var i = 0; i < length; i++) {
  temp = nums % 10;            // Сохраняем цифру в переменной
  result *= temp;              // Складываем цифры числа
  nums = parseInt(nums /10);   // Переходим к следующей цифре в числе
}
  
 
console.log(result);

// var num = 33721;
// var result = 0;
 
// // Простой вариант, если число в виде строки
// for (var i = 0; i < num.length; i++)
//   result *= Number(num[i]);
 
// console.log(result);

