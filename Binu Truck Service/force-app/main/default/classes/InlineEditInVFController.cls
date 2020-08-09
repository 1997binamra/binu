public class InlineEditInVFController {
    public List <Truck_Booking__c> acc {get;set;}
    public List <Payment__c> acc1 {get;set;}
    public InlineEditInVFController(){
        acc= Database.query('Select Id, Name, Status_Of_The_Booking__c, Account_Reference__c, Number_of_Days_for_truck_booked__c, Number_of_Trucks_Required__c, Total_Fare__c, Truck_Name__c, Truck_Give_Up_Date__c, Truck_Issue_Date__c,Pick_Up_Location__c,Drop_Location__c FROM Truck_Booking__c order by createdDate DESC limit 1');
        acc1= Database.query('Select Id, Amount_to_be_Paid__c, Payment_Status__c From Payment__c order by createdDate DESC limit 1 ');
    }
    public PageReference quickUpdat(){
        try{
            update acc;
            return ApexPages.CurrentPage();
        }
        catch(Exception e) {
            System.debug('@@@Error');
            return null;
        }
    }
    public PageReference quickUpdate(){
        try{
            update acc1;
            return ApexPages.CurrentPage();
        }
        catch(Exception e) {
            System.debug('@@@Error');
            return null;
        }
    }
}