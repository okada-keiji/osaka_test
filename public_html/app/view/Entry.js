Ext.define('OsakaTest.view.Entry',{
    extend:'Ext.window.Window',
    alias:'widget.osakatest-entry-window',
    title:'レコードの編集',
    autoShow:true,
    width:400,
    height:330,
    modal:true,
    layout:'fit',
    config:{record:null},
    items:[{
        xtype:'form',
        itemId:'entryform',
        defaults:{
            margin:10,
            allowBrank:false,
            anchor:'100%'
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'ID',
            name:'id',
            hidden:true
        },{
            xtype:'textfield',
            fieldLabel:'名前',
            name:'name'
        },{
            xtype:'textfield',
            fieldLabel:'ふりがな',
            name:'kana'

        },{
            xtype:'textfield',
            fieldLabel:'メールアドレス',
            name:'address',
            vtype:'email'

        },{
            xtype:'combobox',
            store:'Genderes',
            displayField:'jpgender',
            valueField:'genderid',
            fieldLabel:'性別',
            name:'gender',
            editable:false

        },{
            xtype:'datefield',
            fieldLabel:'生年月日',
            name:'birthday',
            format:'Y/m/d'

        },{
            xtype:'combobox',
            store:'Prefes',
            displayField:'prefname',
            valueField:'prefname',
            fieldLabel:'県',
            name:'pref',
            editable:false

        },{
            xtype:'textfield',
            fieldLabel:'携帯電話番号',
            name:'mobile_phone'

        }],
        buttons:[{
            text:'削除',
            handler:function(button){
                var win = button.up('osakatest-entry-window');
                win.fireEvent('deleteemployee',win);
            }
        },'->',{
            text:'保存',
            formBind:true,
            disabled:true,
            handler:function(button){
                var win = button.up('osakatest-entry-window');
                win.fireEvent('editemployee',win);
            }
        },{
            text:'キャンセル',
            handler:function(button){
                var win = button.up('osakatest-entry-window');
                win.fireEvent('canceleditemployee',win);
            }
        }]
    }]
});

