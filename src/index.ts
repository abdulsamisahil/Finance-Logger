import {Invoice} from './classes/Invoice.js'; 
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js'; 
import {HasFormatter} from "./interfaces/HasFormatter.js"; 

const form = document.querySelector('.new-item-form') as HTMLElement; 

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement; 
const toFrom = document.querySelector('#tofrom') as HTMLInputElement; 
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 

//grabbing ul 
const ul = document.querySelector('ul')!; 
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); 
    let doc: HasFormatter; 

    type.value === 'invoice' ? 
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) : 
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);

    list.render(doc, type.value, 'end'); 
}); 

//Begin from #19