Ext.define('OsakaTest.store.Employees',{
    extend:'Ext.data.Store',
    model:'OsakaTest.model.Employee',
    autoLoad:true,
    pagesize:25
});
