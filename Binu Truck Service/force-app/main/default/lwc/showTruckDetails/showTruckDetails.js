import { LightningElement } from 'lwc';

import ursusResources from '@salesforce/resourceUrl/TruckImage';

import getAllTruck from '@salesforce/apex/TruckAvailableController.checkTruck';
export default class ShowTruckDetails extends LightningElement {
    
    trucks;
	error;
	bearSilhouette= ursusResources;
	connectedCallback() {
		this.loadtruck();
	}
	loadtruck() {
		getAllTruck()
			.then(result => {
				this.trucks = result;
			})
			.catch(error => {
				this.error = error;
			});
	}
	handleButton(event){
        window.open('https://binu1-dev-ed.lightning.force.com/lightning/n/Truck_Booking_Page');
    }
}