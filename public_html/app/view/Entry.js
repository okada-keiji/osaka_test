Ext.define('OsakaTest.view.Entry',{
    extend:'Ext.window.Window',
    title:'レコードの編集',
    alias:'widget.entry-window',
    autoShow:true,
    width:400,
    height:300,
    modal:true,
    layout:'fit',
    config:{record:null},
    listeners:{
        beforeshow:function(win){
            var record = win.getRecord();
            win.down('form').loadRecord(record);
        }
    },
    items:[{
        xtype:'form',
        defaults:{
            margin:10
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'名前',
            anchor:'100%',
            name:'name'
        },{
            xtype:'textfield',
            fieldLabel:'ふりがな',
            anchor:'100%',
            name:'kana'
        },{
            xtype:'textfield',
            fieldLabel:'メールアドレス',
            anchor:'100%',
            name:'address'
        },{
            xtype:'combobox',
            store:'Genderes',
            displayField:'jpgender',
            valueField:'genderid',
            fieldLabel:'性別',
            anchor:'100%',
            name:'gender'
        },{
            xtype:'datefield',
            fieldLabel:'生年月日',
            anchor:'100%',
            name:'birthday',
            format:'Y/m/d'
        },{
            xtype:'textfield',
            fieldLabel:'県',
            anchor:'100%',
            name:'pref'
        },{
            xtype:'textfield',
            fieldLabel:'携帯電話番号',
            anchor:'100%',
            name:'mobile_phone'
        }],
        buttons:[{
            text:'保存'
        },{
            text:'キャンセル',
            handler:function(button){
                var win = button.up('window');
                win.close();
            }
        }]
    }]
});
