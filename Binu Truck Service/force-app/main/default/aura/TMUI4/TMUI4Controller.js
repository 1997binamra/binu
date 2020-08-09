({
    doInit : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label:'Action',type:  'button',typeAttributes:
             {iconName: 'utility:view',label: 'View Record',name: 'viewRecord', disabled: false,value: 'viewBtn'}
            },
            {label: 'Payment Id', fieldName: 'Name', type: 'text', sortable: true},
            {label: 'Payment Type', fieldName: 'Payment_Type__c', type: 'text',sortable: true},
            {label: 'Payment Status', fieldName: 'Payment_Status__c', type: 'Text',sortable: true},
            {label: 'Amount Paid', fieldName: 'Amount_to_be_Paid__c', type: 'number',sortable: true}
        ]);
        
        var params ={searchString:component.get('v.paymentSearchValue')};
        helper.callToServer(
            component,
            "c.searchPaymentsSOQL",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.paymentList",response);
            }, 
            params
        );
        
    },
    updateColumnSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    handleRowAction :function(cmp,event,helper){
        //action gives which action performed
        var action = event.getParam('action');
        //row gives complete row information
        var row = event.getParam('row');
        console.log('*****row:'+JSON.stringify(row));
        console.log(JSON.stringify(action));

        window.location.replace('https://binu1-dev-ed.lightning.force.com/lightning/r/Truck__c/'+row.Id+'/view');
    }
})