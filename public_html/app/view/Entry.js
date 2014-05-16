Ext.define('OsakaTest.view.Entry',{
    extend:'Ext.window.Window',
    alias:'widget.osakatest-entry-window',
    config:{record:null},
    initComponent:function(){
        var me = this;
        me.callParent();
        me.fireEvent('modechange',me);
    },
    title:'レコードの編集',
    autoShow:true,
    width:400,
    height:330,
    modal:true,
    layout:'fit',

    // {{{ initComponentでwindowに追加するようにすれば、
    // ボタンのvisibleの切り替えとかもできる

    items:[{
        xtype:'form',
        itemId:'entryform',

        defaults:{
            margin:10,
            allowBrank:false,
            anchor:'100%'
        },
        items:[{
            xtype:'displayfield',
            itemId:'idfield',
            fieldLabel:'ID',
            name:'id',
            submitValue:true
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
            itemId:'delete',
            handler:function(button){
                // initComponent内であれば me.fireEvent() が使える
                var win = button.up('osakatest-entry-window');
                win.fireEvent('deleteemployee',win);
            }
        },'->',{
            text:'保存',
            itemId:'edit',
            formBind:true,
            disabled:true,
            handler:function(button){
                // initComponent内であれば me.fireEvent() が使える
                var win = button.up('osakatest-entry-window');
                win.fireEvent('editemployee',win);
            }
        },{
            text:'キャンセル',
            handler:function(button){
                // initComponent内であれば me.fireEvent() が使える
                var win = button.up('osakatest-entry-window');
                win.fireEvent('canceleditemployee',win);
            }
        }]
    }]

    // }}}
});
