Ext.define('OsakaTest.model.Employee',{
    extend: 'Ext.data.Model',
    fields:[
        {name:'name',type:'string'},
        {name:'kana',type:'string'},
        {name:'address',type:'string'},
        {name:'gender',type:'string'},
        {
            name:'jpgender',
            convert:function(value,record){
                var jpgender = record.get('gender') == "0" ? "男" : "女";
                return jpgender;
            }
        },
        {name:'birthday',type:'date',dataFormat:'Y/m/d'},
        {name:'pref',type:'string'},
        {name:'mobile_phone',type:'string'}
    ],
    proxy:{
        type:'ajax',
        url:'./php/user.php',
        reader:{
            root:'data',
            type:'json'
        }
    }
});