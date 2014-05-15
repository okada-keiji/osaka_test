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
                'beforerender':me.onLoadRecordForm,
                'deleteemployee':me.onDeleteEmployee,
                'editemployee':me.onEditEmployee,
                'canceleditemployee':me.onCancelEditEmployee
            }
        });
    },

    onAddEmployee: function(button) {
        Ext.create('OsakaTest.view.AddEntry');
    },
    onCreateWindow:function(view,rec){
        Ext.create('OsakaTest.view.Entry',{
            record:rec
        })
    },
    onLoadRecordForm: function(win){
        var record = win.getRecord();
        win.down('#entryform').loadRecord(record);
    },
    onDeleteEmployee: function(win){
        Ext.Msg.confirm('削除確認','このレコードを削除してもよろしいですか？',function(res,text){
            if(res === 'yes'){
                form.updateRecord();
                form.submit({
                    url:'./php/delete_user.php',
                    success:function(form,action){
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
        form.updateRecord();
        form.submit({
            url:'./php/update_user.php',
            success:function(form,action){
                win.close();
            },
            failure:function(form,action){
                console.log('更新に失敗しました。');
                win.close();
            }
        });

    },
    onCancelEditEmployee:function(win){
        win.close();
    }
});
