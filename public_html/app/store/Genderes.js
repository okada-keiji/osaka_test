Ext.define('OsakaTest.store.Genderes',{
    extend:'Ext.data.Store',
    autoLoad:true,
    fields:['id','jpgender'],
    data:[
        {"id":"0","jpgender":"男"},
        {"id":"1","jpgender":"女"}
    ]
});
