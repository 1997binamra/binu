import { LightningElement } from 'lwc';


import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class ContactCreation extends LightningElement {
    orderObject = CONTACT_OBJECT;
    ContactFormSubmitted(event){
        
    }
}