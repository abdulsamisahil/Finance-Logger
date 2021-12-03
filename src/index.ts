import {Invoice} from './classes/Invoice.js'; 
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js'; 
import {HasFormatter} from "./interfaces/HasFormatter.js"; 


let docOne: HasFormatter; 
let docTwo: HasFormatter; 

docOne = new Invoice('Sami', 'web work', 500); 
docTwo = new Payment('Shoib', 'constructing work', 10000); 

let docs: HasFormatter[] = []; 

docs.push(docOne); 
docs.push(docTwo); 

const form = document.querySelector('.new-item-form') as HTMLElement; 

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement; 
const toFrom = document.querySelector('#tofrom') as HTMLInputElement; 
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 

//grabbing ul 
const ul = document.querySelector('ul')!; 
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault(); 
    let doc: HasFormatter; 

    type.value === 'invoice' ? 
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) : 
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end'); 
}); 


// Typescript generics

const addUID = <T extends {name: string, age: number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 200); 
    return {...obj, uid}; 
}

let obj = addUID({name: 'Sami', age: 31});
console.log(obj); 
let obj2 = addUID({name: 'Baqi', age: 33}); 
console.log(obj2);


interface Resource <T> {
    uid: number, 
    resourceName: string, 
    data: T
}

const docThree : Resource <string[]> = {
    uid: 45,
    resourceName: 'sami', 
    data: ['apple', 'orange', 'pomogranate', 'banana']
}

const docFour : Resource <object> = {
    uid: 45,
    resourceName: 'sami', 
    data: {
        array1:['apple', 'orange', 'pomogranate', 'banana'], 
        array2:['juice', 'fresh', 'pomogranate', 'banana']
    }
}
console.log(docFour); 
//Begin from #19