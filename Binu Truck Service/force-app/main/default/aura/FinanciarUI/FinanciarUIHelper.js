({
//this function will fetch Payment__c records from server
getpayments : function(component, helper) {
        var action = component.get("c.getAllPayments");
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.data", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
})