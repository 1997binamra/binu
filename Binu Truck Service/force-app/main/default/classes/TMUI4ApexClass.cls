public class TMUI4ApexClass {
    
     @AuraEnabled
    public static List<Payment__c> searchPaymentsSOQL(string searchString) {
        String queryString = 'Select id, Name,Payment_Type__c,Payment_Status__c,Amount_to_be_Paid__c from Payment__c ';
        if(searchString!=null && searchString!=''){
        	searchString = '%'+string.escapeSingleQuotes(searchString)+'%'; 
            queryString = queryString+ 'where Name Like:searchString';
        }
        queryString = queryString + ' Limit 10000';
        List<Payment__c> paymentList = database.query(queryString);
        
        return paymentList;
    }

}