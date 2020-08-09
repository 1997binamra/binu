({
    doInit : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label:'Action',type:  'button',typeAttributes:
             {iconName: 'utility:view',label: 'View Record',name: 'viewRecord', disabled: false,value: 'viewBtn'}
            },
            {label: 'Truck Load Id', fieldName: 'Name', type: 'text', sortable: true},
            {label: 'Truck of Load Items', fieldName: 'Number_of_Load_Items__c', type: 'number',sortable: true},
            {label: 'Approximate Weight To Be Loaded', fieldName: 'Approximate_Weight_To_be_Loaded__c', type: 'number',sortable: true}
        ]);
        
        var params ={searchString:component.get('v.truckLoadSearchValue')};
        helper.callToServer(
            component,
            "c.searchTruckLoadSOQL",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.truckLoadList",response);
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