import { Invoice } from './classes/Invoice.js';
let invoices = [];
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const invoice = new Invoice(toFrom.value, details.value, parseInt(amount.value, 10));
    invoices.push(invoice);
    console.log(invoices);
});
