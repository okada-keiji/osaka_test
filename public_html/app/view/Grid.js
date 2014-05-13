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
        {text:'ID',dataIndex:'id'},
        {text:'名前',dataIndex:'name',flex:1},
        {text:'ふりがな',dataIndex:'kana',flex:1},
        {text:'メールアドレス',dataIndex:'address',flex:1.5},
        {
            text:'性別',
            dataIndex:'gender',
            flex:0.1,
            renderer:function(value){
                if(value === 0){
                    return '男';
                }
                else if(value === 1 ){
                    return '女';
                }
                else{
                    return '異常な値';
                }
            }
        },
        {text:'生年月日',dataIndex:'birthday',flex:1,xtype:'datecolumn',format:'Y/m/d'},
        {text:'県',dataIndex:'pref',flex:1},
        {text:'携帯電話番号',dataIndex:'mobile_phone',flex:1}
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Employees',
        dock: 'bottom'
    }]
});
