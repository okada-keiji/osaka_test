Ext.define('OsakaTest.controller.Grid', {
    extend: 'Ext.app.Controller',
    refs: [
        {ref: 'grid', selector: 'osakatest-grid'},
        {ref: 'entry', selector: 'osakatest-entry-window'}
    ],

    init: function() {
        var me = this;

        me.control({
            'osakatest-grid':{
                'itemdblclick': me.onCreateWindow,
                'addemployee': me.onAddEmployee
            },
            'osakatest-entry-window':{
                'deleteemployee':me.onDeleteEmployee,
                'editemployee':me.onEditEmployee,
                'canceleditemployee':me.onCancelEditEmployee,
                'modechange':me.onModeChange
            }
        });
    },

    onAddEmployee: function() {
        Ext.create('OsakaTest.view.Entry');
    },
    onCreateWindow:function(view,rec){
        Ext.create('OsakaTest.view.Entry',{
            record:rec
        })
    },
    onDeleteEmployee: function(win){
        var form = win.down('#entryform');
        Ext.Msg.confirm('削除確認','このレコードを削除してもよろしいですか？',function(res,text){
            if(res === 'yes'){
                form.updateRecord();
                form.submit({
                    url:'./php/delete_user.php',
                    success:function(form,action){
                        var store = Ext.getStore('Employees').reload();
                        win.close();
                    },
                    failure:function(form,action){
                        console.log('削除に失敗しました。');
                        win.close();
                    }
                });

            }
        });
    },
    onEditEmployee: function(win){
        var form = win.down('#entryform');
        if(win.getRecord()===null){
            form.submit({
                url:'./php/create_user.php',
                success:function(form,action){
                    var store = Ext.getStore('Employees').reload();
                    win.close();
                },
                failure:function(form,action){
                    console.log('追加に失敗しました。');
                    win.close();
                }
            });
        }
        else{
            form.updateRecord();
            form.submit({
                url:'./php/update_user.php',
                success:function(form,action){
                    var store = Ext.getStore('Employees').reload();
                    win.close();
                },
                failure:function(form,action){
                    console.log('更新に失敗しました。');
                    win.close();
                }
            });
        }


    },
    onCancelEditEmployee:function(win){
        win.close();
    },
    onModeChange:function(win){
        var me = this;
        if(win.getRecord() === null){
            me.onAddRecordForm(win);
        }else{
            me.onLoadRecordForm(win);
        }
    },
    onLoadRecordForm: function(win){
        var record = win.getRecord();
        win.down('#entryform').loadRecord(record);
    },
    onAddRecordForm:function(win){
        win.setTitle('レコードの追加');
        win.down('displayfield#idfield').setHiddenState(true);
        win.down('button#delete').setHiddenState(true);
        win.down('button#edit').setText('追加');
    }
});
