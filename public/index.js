import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Sami', 'web work', 500);
docTwo = new Payment('Shoib', 'constructing work', 10000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//grabbing ul 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice' ?
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) :
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
// Typescript generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 200);
    return Object.assign(Object.assign({}, obj), { uid });
};
let obj = addUID({ name: 'Sami', age: 31 });
console.log(obj);
let obj2 = addUID({ name: 'Baqi', age: 33 });
console.log(obj2);
const docThree = {
    uid: 45,
    resourceName: 'sami',
    data: ['apple', 'orange', 'pomogranate', 'banana']
};
const docFour = {
    uid: 45,
    resourceName: 'sami',
    data: {
        array1: ['apple', 'orange', 'pomogranate', 'banana'],
        array2: ['juice', 'fresh', 'pomogranate', 'banana']
    }
};
console.log(docFour);
//Begin from #19
