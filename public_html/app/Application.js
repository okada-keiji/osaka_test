Ext.define('OsakaTest.Application', {
    name: 'OsakaTest',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Grid'
        // TODO: add controllers here
    ],

    stores: [
        'Employees',
        'Genderes',
        'Prefes'
        // TODO: add stores here
    ]
});
