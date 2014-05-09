Ext.define('OsakaTest.store.Store', {
    extend: 'Ext.data.Store', 
    fields: [ {name: 'id', type: 'int'}, 'first', 'last' ],
    idProperty: 'id',
    data: [
        { id: 1, first: 'ジョン', last: 'レノン' },
        { id: 2, first: 'ポール', last: 'マッカートニー' },
        { id: 3, first: 'ジョージ', last: 'ハリソン' },
        { id: 4, first: 'リンゴ', last: 'スター' }
    ],
    proxy:{
        type:'memory'
    }
//model: 'osakatest.model.employee',
//autoload: true
});
