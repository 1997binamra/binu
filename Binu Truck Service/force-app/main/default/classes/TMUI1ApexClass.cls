public class TMUI1ApexClass {
    
    @AuraEnabled
    public static List<Truck__c> searchTruckSOQL(string searchString) {
        String queryString = 'Select id, Name,Truck_Name__c,Truck_Number__c,Truck_Type__c from Truck__c ';
        if(searchString!=null && searchString!=''){
        	searchString = '%'+string.escapeSingleQuotes(searchString)+'%'; 
            queryString = queryString+ 'where Truck_Name__c Like:searchString';
        }
        queryString = queryString + ' Limit 10000';
        List<Truck__c> truckList = database.query(queryString);
        
        return truckList;
    }

}