public class FinanciarUIClass {
    
    @AuraEnabled
    public static List<Payment__c> getAllPayments(){
        
        return [SELECT Id, Name, Amount_Currency__c, Amount_to_be_Paid__c,
                    Case__c , Initial_Amount__c , Number_of_Days_for_truck_booked__c, Number_of_Trucks_Required__c,
                    Payment_Due__c, Payment_Status__c, Payment_Type__c, Total_Fare__c, Truck_Booking_Id__c, Truck_Give_Up_Date__c, Truck_Issue_Date__c, Truck_Name__c
                    FROM Payment__c ];
    }

}