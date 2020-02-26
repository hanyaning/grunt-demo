//获取节点
var width = $("#width");
var height = $("#height");
var add = $("#add");
var zhouchang = $('#zhouchang');
var area = $("#area");
//点击事件
add.click(()=>{
    var w = Number(width.val());
    var h = Number(height.val());
    var zc = 2*(w+h);
    var ae = w*h
    zhouchang.val(zc);
    area.val(ae);
})