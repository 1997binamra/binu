import { LightningElement,wire, api,track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getAllOrder from '@salesforce/apex/TruckMapController.getAllTruckBooking'; 
const fields = [
	'Truck__c.Truck_Name__c',
	'Truck__c.Location__Latitude__s',
	'Truck__c.Location__Longitude__s'
];
export default class TruckMaping extends LightningElement {
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