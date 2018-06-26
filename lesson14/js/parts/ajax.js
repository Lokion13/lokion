function ajax() {
	let request = new XMLHttpRequest();
request.open("POST", 'server.php');
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let formData = new FormData(form);

request.send(formData);

request.onreadystatechange = function() {
    if(request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
    } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            //Добавляем контент на страницу
        }
        else {
            statusMessage.innerHTML = message.failure;
        }
    }
}
for(let i = 0; i < input.length; i++) {
    input[i].value = '';
    //очищаем input поля ввода
};




formContact.addEventListener('submit', function(event) {
    event.preventDefault();
    formContact.appendChild(statusMessage);


let requestContact = new XMLHttpRequest();
    requestContact.open("POST", 'server.php');
    requestContact.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let formContactData = new FormData(formContact);

// for(let i = 0; i < 2; i++) {
requestContact.send(formContactData);
// }
requestContact.onreadystatechange = function() {
    if(requestContact.readyState < 4) {
        statusMessage.innerHTML = message.loading;
    } else if (requestContact.readyState === 4) {
        if (requestContact.status == 200 && requestContact.status < 300) {
            statusMessage.innerHTML = message.succes;
            //Добавляем контент на страницу
        }
        else {
            statusMessage.innerHTML = message.failure;
        }
    }
}

for(let i = 0; i < inputContact.length; i++) {
    inputContact[i].value = '';
    //очищаем input поля ввода
};

});


}

module.exports = ajax;



