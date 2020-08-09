public class TMUI3ApexClass {
     @AuraEnabled
    public static List<Truck_Load__c> searchTruckLoadSOQL(string searchString) {
        String queryString = 'Select id, Name,Number_of_Load_Items__c,Items_To_be_Load__c,Approximate_Weight_To_be_Loaded__c from Truck_Load__c ';
        if(searchString!=null && searchString!=''){
        	searchString = '%'+string.escapeSingleQuotes(searchString)+'%'; 
            queryString = queryString+ 'where Name Like:searchString';
        }
        queryString = queryString + ' Limit 10000';
        List<Truck_Load__c> truckLoadList = database.query(queryString);
        
        return truckLoadList;
    }


}