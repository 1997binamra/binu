import { LightningElement } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/TruckImage';
export default class HelloCustomer extends LightningElement {
    
    Truckimage= ursusResources;
    handleButton(event){
        window.open('https://binu1-dev-ed.lightning.force.com/lightning/n/Truck_Booking_Page');
    }
    handleButton1(event){
        window.open('https://binu1-dev-ed.lightning.force.com/lightning/n/Create_Account');
    }
}