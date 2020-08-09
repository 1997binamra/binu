public class TruckDriverApexClass1 {
     @AuraEnabled
    public static List<Truck_Booking__c> getTruckBookingRecord()
   {
        return new List<Truck_Booking__c>([Select Id, Name, Truck_Name__c,Total_Fare__c,Number_of_Trucks_Required__c from Truck_Booking__c]);
    }

}