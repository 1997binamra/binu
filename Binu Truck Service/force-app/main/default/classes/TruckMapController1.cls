public with sharing class TruckMapController1 {
    public TruckMapController1() {

    }
    @AuraEnabled
    public static string getAllTruckBooking(){ 
        
      string query = 'select id,Name,Drop_Geolocation__c from Truck_Booking__c where Drop_Geolocation__longitude__s != null and Drop_Geolocation__latitude__s != null limit 10';
        string baseUrl = URL.getSalesforceBaseUrl().toExternalForm();
 
        list< map<string,object>> markerList = new list< map<string,object>>();
        for(Truck_Booking__c order : Database.query(query)){          
            if(order.Drop_Geolocation__c != null){
               
               String recordLink = '<br><a href="' + baseUrl + '/' + order.id  + '" target="_blank">Go To Record Detail</a>';
 
               map<string,object> markerMap = new map<string,object>();
               markerMap.put('title', order.name);
               markerMap.put('description',order.name +' ' +  recordLink);
               map<string,object> addressMap = new map<string,object>();
               addressMap.put('Latitude',order.Drop_Geolocation__c.getLatitude());
               addressMap.put('Longitude',order.Drop_Geolocation__c.getLongitude());
               markerMap.put('location',addressMap);
               markerList.add(markerMap);  
            }
          }
            
              
        system.debug('+++++++'+JSON.serialize(markerList));  
        return JSON.serialize(markerList);  
        
    } 
}