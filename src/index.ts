import {Invoice} from './classes/Invoice.js'; 

let invoices: Invoice[] = []; 
const form = document.querySelector('.new-item-form') as HTMLElement; 

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement; 
const toFrom = document.querySelector('#tofrom') as HTMLInputElement; 
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 


form.addEventListener('submit', (e: Event) =>{
    e.preventDefault(); 
    const invoice = new Invoice(toFrom.value, details.value, parseInt(amount.value, 10)); 
    invoices.push(invoice); 
    console.log(invoices); 
})


//Sami är bäst