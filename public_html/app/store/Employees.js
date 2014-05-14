Ext.define('OsakaTest.store.Employees',{
    extend:'Ext.data.Store',
    model:'OsakaTest.model.Employee',
    remoteSort:true,
    autoLoad:true,
    pagesize:25
});
