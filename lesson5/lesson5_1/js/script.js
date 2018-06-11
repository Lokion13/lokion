let menu = document.getElementsByClassName('menu')[0], 
    title = document.getElementById('title'),
    adv = document.querySelector('.adv').remove(),
    column = document.getElementsByClassName('column'),
    answer = document.getElementById('prompt'),
    menuItem = document.getElementsByClassName('menu-item'),
    menuUl = document.getElementsByTagName('ul'),
    menuItemLi = document.getElementsByTagName('li'),
    newMenuItem = document.createElement('li');
let question = prompt('What is your opinion about devices produced by apple?');

console.log(menu);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
// document.menuItem.replaceWith(menuItem[2], menuItem[1]);
// adv.classList.remove();
title.textContent = 'Мы продаем только подлинную технику Apple';
// document.column.removeChild(adv);
answer.innerHTML = question;
menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';
newMenuItem.classList.add('menu-item');
// document.appendChild(newMenuItem);

// newMenuItem.textContent = 'Пятый пункт';

// document.menuItem.appendChild(newMenuItem);

// document.body.replaceChild(menuItem[2], menuItem[1]);
// newMenuItem.className = 'menu-item';
newMenuItem.innerHTML = 'Пятый пункт';
menuUl[0].appendChild(newMenuItem);



