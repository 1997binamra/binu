public class ObjectClass {
    
     //Below method will return list of brands [COPYRIGHTS : SalesforceKid (www.salesforcekid.com)]
    @AuraEnabled
    public static List<Truck__c> getBrand(){
        List<Truck__c> proplist = [Select Id, Name FROM Truck__c];
        return proplist;   
    }

    //Below method will return pictures based on Objects [COPYRIGHTS : SalesforceKid (www.salesforcekid.com)]
    @AuraEnabled
    public static List<ContentVersion> getContents(string brandId, string ObjectName) {
        Set<Id> contentIds = new Set<Id>();
        if(ObjectName == 'Truck__c')
        {
            //SOQL query to get pictures from Brand object [COPYRIGHTS : SalesforceKid (www.salesforcekid.com)]
            for (ContentDocumentLink cont :[SELECT ContentDocumentId, LinkedEntityId FROM ContentDocumentLink where LinkedEntityId in ( SELECT Id FROM Truck__c where Id =: brandId) and LinkedEntity.Type=:ObjectName]) {
                contentIds.add(cont.ContentDocumentId);
            }
        }
         
        //Below Query will return the latest image Id uploaded in files [COPYRIGHTS : SalesforceKid (www.salesforcekid.com)]
return [SELECT Id,Title FROM ContentVersion WHERE ContentDocumentId IN :contentIds LIMIT 1];
    }

}