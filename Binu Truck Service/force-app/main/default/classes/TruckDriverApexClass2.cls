public class TruckDriverApexClass2 {
    
     @AuraEnabled
    public static List<Truck_Load__c> getTruckLoadRecord()
   {
        return new List<Truck_Load__c>([Select Id, Name, Approximate_Weight_To_be_Loaded__c,Number_of_Load_Items__c, Truck_Booking_Id__c from Truck_Load__c]);
    }

}