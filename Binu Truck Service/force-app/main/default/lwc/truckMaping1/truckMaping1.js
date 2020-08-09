import { LightningElement,track } from 'lwc';
import getAllOrder from '@salesforce/apex/TruckMapController1.getAllTruckBooking'; 
export default class TruckMaping1 extends LightningElement {
    @track loaded = true;
 
    
    applyFilter(event) {
        this.loaded = false;
       
        window.console.log(event);
 
        getAllOrder()
            .then(result => {
                window.console.log(result);
                this.mapMarkers = JSON.parse(result);
                this.markersTitle = "Truck Booking Records";
                this.orders = result;
                this.loaded = true;
            })
            .catch(error => {
                this.error = error;
                this.loaded = true;
            });
    }
}