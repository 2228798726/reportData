//判断数据不能为空
function check() {
    var TOLLDATE=$("#TOLLDATE").val();
    var OWNERNAME=$("#OWNERNAME").val();
    var CONTENT=$("#CONTENT").val();
    if (TOLLDATE == ""){
        $("#message").text("日期不能为空！");
        return false;
    }
    if (OWNERNAME == ""){
        $("#message").text("部门不能为空！");
        return false;
    }
    if (CONTENT == ""){
        $("#message").text("内容不能为空！");
        return false;
    }
    $("#message").text("");
    return  true;
}