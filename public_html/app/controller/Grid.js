Ext.define('OsakaTest.controller.Grid', {
    extend: 'Ext.app.Controller',

    refs: [
        {ref: 'grid', selector: 'osakatest-grid'},
        {ref: 'entry', selector: 'osakatest-entry-window'}
    ],

    init: function() {
        var me = this;

        me.control({
            'osakatest-grid button#addButton': {
                'click': me.onAddButton
            },
            'osakatest-grid':{
                'itemdblclick': me.createWindow
            },
            'osakatest-entry-window':{
                'beforerender':me.loadRecordForm
            }
        });
    },

    onAddButton: function(button) {
        Ext.create('OsakaText.view.AddEntry');
    },
    createWindow:function(view,rec){
        Ext.create('OsakaTest.view.Entry',{
            record:rec
        })
    },
    loadRecordForm: function(win){
        var record = win.getRecord();
        win.down('#entryform').loadRecord(record);
    }

});
