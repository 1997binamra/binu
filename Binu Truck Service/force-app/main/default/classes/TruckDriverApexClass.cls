public class TruckDriverApexClass {
    @AuraEnabled
    public static List<Truck__c> getTruckRecord()
   {
        return new List<Truck__c>([Select Id, Name, Truck_Name__c,Truck_Number__c from Truck__c]);
    }
    @AuraEnabled
    public static List<Truck_Booking__c> getTruckBookingRecord()
   {
        return new List<Truck_Booking__c>([Select Id, Name, Truck_Name__c,Total_Fare__c from Truck_Booking__c]);
    }

}