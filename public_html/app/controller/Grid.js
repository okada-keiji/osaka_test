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
            'osakatest-entry-window':{
                'beforerender':me.showEntryWindow
            }
        });
    },

    onAddButton: function(button) {
        Ext.create('OsakaText.view.AddEntry');
    },
    showEntryWindow: function(win){
        var record = win.getRecord();
        win.down('#entryform').loadRecord(record);
    }

});
