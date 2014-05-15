Ext.define('OsakaTest.view.Grid',{
    extend:'Ext.grid.Panel',
    requires:['OsakaTest.view.Entry','OsakaTest.view.AddEntry'],
    alias:'widget.osakatest-grid',
    title:'名簿',
    store:'Employees',
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
                var store = Ext.getStore('Genderes'),
                    rec = store.findRecord('genderid', value, 0,false,false, true);
                return rec.get('jpgender');
            }
        },
        {text:'生年月日',dataIndex:'birthday',flex:1,xtype:'datecolumn',format:'Y/m/d'},
        {text:'県',dataIndex:'pref',flex:1},
        {text:'携帯電話番号',dataIndex:'mobile_phone',flex:1}
    ],
    tbar:[{
        text:'追加',
        itemId: 'addButton'
    }],
    bbar: [{
        xtype: 'pagingtoolbar',
        store: 'Employees'
    }]
});
