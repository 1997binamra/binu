public class Redirect_Main {

    public List<Payment__c> accs {set;get;}

    public Redirect_Main(){
        accs = [select Id,Name, Truck_Booking_Id__c, Payment_Type__c, Amount_to_be_Paid__c,Initial_Amount__c,Number_of_Days_for_truck_booked__c, Number_of_Trucks_Required__c,Total_Fare__c,Truck_Give_Up_Date__c, Truck_Issue_Date__c,Truck_Name__c,Payment_Due__c,Pick_Up_Location__c,Drop_Location__c from Payment__c order by createdDate DESC limit 1];
    }
}