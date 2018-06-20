let age = document.getElementById('age');
    // ageValue = age.value;
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age);