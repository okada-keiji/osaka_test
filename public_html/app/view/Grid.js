Ext.define('OsakaTest.view.Grid',{
    extend:'Ext.grid.Panel',
    requires:['OsakaTest.view.Entry'],
    alias:'widget.osakatestgrid',
    title:'名簿',
    store:'Employees',
    listeners:{
        'itemdblclick':function(view,rec){
            Ext.create('OsakaTest.view.Entry',{
                record:rec
            });
        }
    },
    columns:[
        {text:'名前',dataIndex:'name'},
        {text:'ふりがな',dataIndex:'kana'},
        {text:'メールアドレス',dataIndex:'address'},
        {text:'性別',dataIndex:'gender'},
        {text:'生年月日',dataIndex:'birthday',xtype:'datecolumn',format:'Y/m/d'},
        {text:'県',dataIndex:'pref'},
        {text:'携帯電話番号',dataIndex:'mobile_phone'}
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Employees',
        dock: 'bottom'
    }]
});
