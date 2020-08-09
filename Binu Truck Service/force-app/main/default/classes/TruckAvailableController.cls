public with sharing class TruckAvailableController {
    public TruckAvailableController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Truck__c> checkTruck(){
        return [SELECT Name,Truck_Name__c,Truck_Number__c,Maximum_Load__c,Truck_Image__c,Cost__c,Cost_Currency__c,Load_Measure_Unit__c FROM Truck__c];
        }
    }