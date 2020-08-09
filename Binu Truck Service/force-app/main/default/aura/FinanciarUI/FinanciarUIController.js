({
    doInit : function(component, event, helper) {
        //creating datatable columns
        component.set('v.columns', [
             {label: 'Payment Id', fieldName: 'Name', type: 'text', sortable: true},
            {label: 'Payment Type', fieldName: 'Payment_Type__c', type: 'text',sortable: true},
            {label: 'Payment Status', fieldName: 'Payment_Status__c', type: 'Text',sortable: true},
            {label: 'Amount Paid', fieldName: 'Amount_to_be_Paid__c', type: 'number',sortable: true},
            {label: 'Payment Due', fieldName: 'Payment_Due__c', type: 'number',sortable: true},
            {label: 'Action', type: 'button', initialWidth: 135, typeAttributes:
               { label: 'View', name: 'view_details', title: 'Click to View or Edit Details'}}
        ]);
        //getting Payment__c records from server by calling helper methods
        helper.getpayments(component, helper);

    },
    //this function will be called when view button is pressed in datatable
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var truck = event.getParam('row');
        switch (action.name) {
            case 'view_details':
                component.set("v.recordId", truck.Id);
                break;
            default:
                component.set("v.recordId", truck.Id);
                break;
        }
        if(component.get("v.recordId")){
            component.set("v.showDetails", true);
        }
    },
     handleClick : function(component, event, helper) {
                  window.location.replace('https://binu1-dev-ed.lightning.force.com/lightning/o/Payment__c/home');
                              
                }
})