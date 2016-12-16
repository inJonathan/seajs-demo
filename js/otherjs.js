// 这里是一个js模块
define(function(require, exports, module) {
    
    var $ = require('jquery.seajs'); // 引入相关依赖

    var obj = 'obj in other';

    module.exports = { // 暴露接口
        showName: function (name){
            $(".container").append('<span>my name is '+ name +'</span><br/>');
        },
        obj: obj // 使外部可以访问得到内部变量
    };
});