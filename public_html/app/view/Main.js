Ext.define('OsakaTest.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'OsakaTest.view.Grid'
    ],
    xtype: 'app-main',

    layout: {
        type: 'fit'
    },

    items: [{
        // ケツカンマ
        xtype: 'osakatest-grid',
    }]
});
