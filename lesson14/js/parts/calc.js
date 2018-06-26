function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum * personsSum) * 4000;
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            
        })

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum * personsSum) * 4000;
            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });


        place.addEventListener('change', function() {
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

        // function tester(persons) {
        //     let value = persons.value;
        //     let rep = /[-\.;":'a-zA-Яа-яА-Я]/;
        //     if(rep.test(value)) {
        //         value = value.replace(rep, '');
        //         persons.value = value
        //     }

        // }

        // tester(persons);

// function tester(persons) {
//    persons.value = persons.value.replace(/[^\d,]/g, '');
// };

// tester(persons);
}

module.exports = calc;