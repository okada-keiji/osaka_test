Ext.define('OsakaTest.view.AddEntry',{
    extend:'Ext.window.Window',
    title:'レコードの追加',
    autoShow:true,
    width:400,
    height:330,
    modal:true,
    layout:'fit',
    items:[{
        xtype:'form',
        defaults:{
            margin:10
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'ID',
            anchor:'100%',
            name:'id'
        },{
            xtype:'textfield',
            fieldLabel:'名前',
            anchor:'100%',
            name:'name',
            allowBlank:false
        },{
            xtype:'textfield',
            fieldLabel:'ふりがな',
            anchor:'100%',
            name:'kana',
            allowBlank:false

        },{
            xtype:'textfield',
            fieldLabel:'メールアドレス',
            anchor:'100%',
            name:'address',
            allowBlank:false

        },{
            xtype:'combobox',
            store:'Genderes',
            displayField:'jpgender',
            valueField:'genderid',
            fieldLabel:'性別',
            anchor:'100%',
            name:'gender',
            allowBlank:false

        },{
            xtype:'datefield',
            fieldLabel:'生年月日',
            anchor:'100%',
            name:'birthday',
            format:'Y/m/d',
            allowBlank:false

        },{
            xtype:'textfield',
            fieldLabel:'県',
            anchor:'100%',
            name:'pref',
            allowBlank:false

        },{
            xtype:'textfield',
            fieldLabel:'携帯電話番号',
            anchor:'100%',
            name:'mobile_phone',
            allowBlank:false

        }],
        buttons:[{
            text:'追加',
            handler:function(button){
                var form = button.up('window').down('form').getForm();
                form.submit({
                    url:'./php/create_user.php',
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
