({
    doInit : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label:'Action',type:  'button',typeAttributes:
             {iconName: 'utility:view',label: 'View Record',name: 'viewRecord', disabled: false,value: 'viewBtn'}
            },
            {label: 'Truck Name', fieldName: 'Truck_Name__c', type: 'text', sortable: true},
            {label: 'Truck Number', fieldName: 'Truck_Number__c', type: 'text',sortable: true},
            {label: 'Truck Type', fieldName: 'Truck_Type__c', type: 'Text',sortable: true}
        ]);
        
        var params ={searchString:component.get('v.truckSearchValue')};
        helper.callToServer(
            component,
            "c.searchTruckSOQL",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.truckList",response);
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