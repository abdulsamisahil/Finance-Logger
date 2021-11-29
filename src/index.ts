import {Invoice} from './classes/Invoice.js'; 
import {Payment} from './classes/Payment.js'; 
import {HasFormatter} from "./interfaces/HasFormatter.js"; 


let docOne: HasFormatter; 
let docTwo: HasFormatter; 

docOne = new Invoice('Sami', 'web work', 500); 
docTwo = new Payment('Shoib', 'constructing work', 10000); 

let docs: HasFormatter[] = []; 

docs.push(docOne); 
docs.push(docTwo); 


//console.log(docs); 

let invoices: Invoice[] = []; 
const form = document.querySelector('.new-item-form') as HTMLElement; 

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement; 
const toFrom = document.querySelector('#tofrom') as HTMLInputElement; 
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 


form.addEventListener('submit', (e: Event) =>{
    e.preventDefault(); 
    let doc: HasFormatter; 

    type.value === 'invoice' ? 
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) : 
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  
    console.log(doc); 
}); 


//Begin from #17