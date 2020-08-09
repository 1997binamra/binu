public class TruckDriverApexClass3 {
    
        @AuraEnabled
    public static List<Payment__c> getPaymentRecord()
   {
        return new List<Payment__c>([Select Id, Name, Payment_Type__c,Payment_Status__c, Payment_Due__c,Amount_to_be_Paid__c from Payment__c]);
    }

}