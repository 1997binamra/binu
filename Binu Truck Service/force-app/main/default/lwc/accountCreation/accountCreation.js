import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class AccountCreation extends LightningElement {
    orderObject = ACCOUNT_OBJECT;
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Record Created',
            message: 'Application is loaded ',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    AccountFormSubmitted(event){
        
    }
    handleButton(event){
        window.location.replace('https://binu1-dev-ed.lightning.force.com/lightning/n/Create_Contact');
    }
}