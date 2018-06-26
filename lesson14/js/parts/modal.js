function modal() {
	let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            description_btn = document.querySelectorAll('.description-btn');
            console.log(description_btn);

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    for (let i = 0; i < description_btn.length; i++) {
        description_btn[i].addEventListener('click', function() {
            this.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    create(text) {
    let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
             `
    document.body.appendChild(div);
  }
}

let divCreation = new Options('150px', '50px', 'green', '14px', 'center');
divCreation.create('все работает');

//FORM

let message = new Object();
    message.loading = "Loading....";
    message.success = "Thank you, our managers connect with your soon";
    message.failure = "something wrong...";

let form = document.getElementsByClassName('main-form')[0],
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    formContact = document.getElementById('form'),
    inputContact = formContact.getElementsByTagName('input');

statusMessage.classList.add('status');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

});
}


module.exports = modal;