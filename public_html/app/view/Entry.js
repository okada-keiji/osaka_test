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
            itemId:'delete',
            handler:function(button){
                Ext.Msg.confirm('削除確認','このレコードを削除してもよろしいですか？',function(res,text){
                    if(res === 'yes'){
                        var form = button.up('window').down('form').getForm();
                        form.updateRecord();
                        form.submit({
                            url:'./php/delete_user.php',
                            success:function(form,action){
                                button.up('window').close();
                            },
                            failure:function(form,action){
                                console.log('削除に失敗しました。');
                                button.up('window').close();
                            }
                        });

                    }
                });
            }
        },'->',{
            text:'保存',
            formBind:true,
            disabled:true,
            handler:function(button){
                var form = button.up('window').down('form').getForm();
                form.updateRecord();
                form.submit({
                    url:'./php/update_user.php',
                    success:function(form,action){
                        button.up('window').close();
                    },
                    failure:function(form,action){
                        console.log('更新に失敗しました。');
                        button.up('window').close();
                    }
                });
            }
        },{
            text:'キャンセル',
            handler:function(button){
                var win = button.up('window');
                win.close();
            }
        }]
    }]
});

