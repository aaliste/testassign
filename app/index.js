'use strict';
import './style.scss';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
const n = { x, y, ...z };

/*function attachCheckboxHandlers() {
    var el = document.getElementById('toppings');

    var tops = el.getElementsByTagName('input');

    // assign updateTotal function to onclick property of each checkbox
    for (var i=0, len=tops.length; i<len; i++) {
        if ( tops[i].type === 'checkbox' ) {
            tops[i].onclick = updateTotal;
        }
    }
}

function updateTotal(e) {
    var form = this.form;

    // get current value in total text box, using parseFloat since it is a string
    var val = parseFloat( form.elements['total'].value );

    // if check box is checked, add its value to val, otherwise subtract it
    if ( this.checked ) {
        val += parseFloat(this.value);
    } else {
        val -= parseFloat(this.value);
    }

    // format val with correct number of decimal places
    // and use it to update value of total text box
    // EMIL VAATA SIIA
    const totalCounter = document.querySelector('.total-counter');
    totalCounter.innerHTML = `${formatDecimal(val)} is the total`; */
