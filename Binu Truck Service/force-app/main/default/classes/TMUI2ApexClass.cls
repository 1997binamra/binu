public class TMUI2ApexClass {
    
     @AuraEnabled
    public static List<Truck_Booking__c> searchTruckBookingSOQL(string searchString) {
        String queryString = 'Select id, Name,Truck_Name__c,Truck_Give_Up_Date__c,Truck_Issue_Date__c from Truck_Booking__c ';
        if(searchString!=null && searchString!=''){
        	searchString = '%'+string.escapeSingleQuotes(searchString)+'%'; 
            queryString = queryString+ 'where Name Like:searchString';
        }
        queryString = queryString + ' Limit 10000';
        List<Truck_Booking__c> truckBookingList = database.query(queryString);
        
        return truckBookingList;
    }


}