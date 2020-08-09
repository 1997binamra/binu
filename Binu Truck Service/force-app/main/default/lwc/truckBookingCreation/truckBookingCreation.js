import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditFormCreateExampleLWC extends LightningElement {
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Record Created',
            message: 'Application is loaded ',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleButton(event){
        window.location.replace('https://binu1-dev-ed.lightning.force.com/lightning/n/Truck_Load_Page');
    }
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}