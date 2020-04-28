var reg = /^([0-9])+$/;
var reg2 = /^([-]|[0-9])+(\.+[0-9]{1,2})?\%$/;
var reg1 = /^([0-9])+$/;

//判断数据不能为空
function check() {
    var TOLLDATE=$("#TOLLDATE").val();
    var OWNERNAME=$("#OWNERNAME").val();
    var CONTENT=$("#CONTENT").val();

    var TOLLDATE1=$("#TOLLDATE_Daily").val();
    var CAR_EX1=$("#CAR_EX").val();
    var TRUCK_EX1=$("#TRUCK_EX").val();
    var YOY_CAR_EX1=$("#YOY_CAR_EX").val();
    var YOY_TRUCK_EX1=$("#YOY_TRUCK_EX").val();
    var MOM_CAR_EX1=$("#MOM_CAR_EX").val();
    var MOM_TRUCK_EX1=$("#MOM_TRUCK_EX").val();
    var CAR_EN1=$("#CAR_EN").val();
    var TRUCK_EN1=$("#TRUCK_EN").val();
    var YOY_CAR_EN1=$("#YOY_CAR_EN").val();
    var YOY_TRUCK_EN1=$("#YOY_TRUCK_EN").val();
    var MOM_CAR_EN1=$("#MOM_CAR_EN").val();
    var MOM_TRUCK_EN1=$("#MOM_TRUCK_EN").val();
    var PERSONFLOW1=$("#PERSONFLOW").val();
    var MOM_PERSONFLOW1=$("#MOM_PERSONFLOW").val();
    var CARFLOW1=$("#CARFLOW").val();
    var TRUCKFLOW1=$("#TRUCKFLOW").val();
    var MOM_CARFLOW1=$("#MOM_CARFLOW").val();
    var MOM_TRUCKFLOW1=$("#MOM_TRUCKFLOW").val();
    var YOY_UNKNOWN_EX1=$("#YOY_UNKNOWN_EX").val();
    var YOY_UNKNOWN_EN1=$("#YOY_UNKNOWN_EN").val();
    var MOM_UNKNOWN_EX1=$("#MOM_UNKNOWN_EX").val();
    var MOM_UNKNOWN_EN1=$("#MOM_UNKNOWN_EN").val();

    if (TOLLDATE1 == ""){
        $("#message").text("日期不能为空！");
        return false;
    }

    if (returnOWNERNAME()==false){
        $("#message").text("管理处不能为空！");
        return false;
    }
    if (returnCONTENT()==false){
        $("#message").text("内容不能为空！");
        return false;
    }


    if (CAR_EX1 == ""){
        $("#message").text("出口车流量当日客车车流量不能为空！");
        return false;
    }else {
        if(!reg.test(CAR_EX1)){
            $("#message").text("出口车流量当日客车车流量只能为整数!");
            return false;
        }
    }
    if (TRUCK_EX1 == ""){
        $("#message").text("出口车流量当日货车车流量不能为空！");
        return false;
    }else{
        if(!reg.test(TRUCK_EX1)){
            $("#message").text("出口车流量当日货车车流量只能为整数!");
            return false;
        }
    }
    if (YOY_CAR_EX1 == ""){
        $("#message").text("出口车流量同比客车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(YOY_CAR_EX1)){
            $("#message").text("出口车流量同比客车车流量只能为百分数!");
            return false;
        }
    }
    if (YOY_TRUCK_EX1 == ""){
        $("#message").text("出口车流量同比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(YOY_TRUCK_EX1)){
            $("#message").text("出口车流量同比货车车流量只能为百分数!");
            return false;
        }
    }
    if (MOM_CAR_EX1 == ""){
        $("#message").text("出口车流量环比客车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_CAR_EX1)){
            $("#message").text("出口车流量环比客车车流量只能为百分数!");
            return false;
        }
    }
    if (MOM_TRUCK_EX1 == ""){
        $("#message").text("出口车流量环比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_TRUCK_EX1)){
            $("#message").text("出口车流量环比货车车流量只能为百分数!");
            return false;
        }
    }
    if (CAR_EN1 == ""){
        $("#message").text("入口车流量当日客车车流量不能为空！");
        return false;
    }else {
        if(!reg.test(CAR_EN1)){
            $("#message").text("入口车流量当日客车车流量只能为整数!");
            return false;
        }
    }
    if (TRUCK_EN1 == ""){
        $("#message").text("入口车流量当日货车车流量不能为空！");
        return false;
    }else {
        if(!reg.test(TRUCK_EN1)){
            $("#message").text("入口车流量当日货车车车流量只能为整数!");
            return false;
        }
    }
    if (YOY_CAR_EN1 == ""){
        $("#message").text("入口车流量同比客车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(YOY_CAR_EN1)){
            $("#message").text("入口车流量同比客车车流量只能为百分数!");
            return false;
        }
    }
    if (YOY_TRUCK_EN1 == ""){
        $("#message").text("入口车流量同比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(YOY_TRUCK_EN1)){
            $("#message").text("入口车流量同比货车车流量只能为百分数!");
            return false;
        }
    }
    if (MOM_CAR_EN1 == ""){
        $("#message").text("入口车流量环比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_CAR_EN1)){
            $("#message").text("入口车流量环比客车车流量只能为百分数!");
            return false;
        }
    }
    if (MOM_TRUCK_EN1 == ""){
        $("#message").text("入口车流量环比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_TRUCK_EN1)){
            $("#message").text("入口车流量环比货车车流量只能为百分数!");
            return false;
        }
    }
    if (PERSONFLOW1 == ""){
        $("#message").text("服务区当日人流量不能为空！");
        return false;
    }else {
        if(!reg.test(PERSONFLOW1)){
            $("#message").text("服务区当日人流量只能为整数!");
            return false;
        }
    }
    if (MOM_PERSONFLOW1 == ""){
        $("#message").text("服务区环比人流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_PERSONFLOW1)){
            $("#message").text("服务区环比人流量只能为百分数!");
            return false;
        }
    }
    if (CARFLOW1 == ""){
        $("#message").text("服务区当日客车流量不能为空！");
        return false;
    }else {
        if(!reg.test(CARFLOW1)){
            $("#message").text("服务区当日客车车流量只能为整数!");
            return false;
        }
    }
    if (TRUCKFLOW1 == ""){
        $("#message").text("服务区当日货车车流量不能为空！");
        return false;
    }else {
        if(!reg.test(TRUCKFLOW1)){
            $("#message").text("服务区当日货车车流量只能为整数!");
            return false;
        }
    }
    if (MOM_CARFLOW1 == ""){
        $("#message").text("服务区环比客车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_CARFLOW1)){
            $("#message").text("服务区环比客车流量只能为保留两位小数的百分数!");
            return false;
        }
    }
    if (MOM_TRUCKFLOW1 == ""){
        $("#message").text("服务区环比货车车流量不能为空！");
        return false;
    }else{
        if(!reg2.test(MOM_TRUCKFLOW1)){
            $("#message").text("服务区环比货车流量只能为百分数!");
            return false;
        }
    }
    if(YOY_UNKNOWN_EX1!=""){
        if(!reg2.test(YOY_UNKNOWN_EX1)){
            $("#message").text("出口未知车型同比车车流量只能为百分数!!");
            return false;
        }
    }
    if(MOM_UNKNOWN_EX1!=""){
        if(!reg2.test(MOM_UNKNOWN_EX1)){
            $("#message").text("出口未知车型环比车车流量只能为百分数!!");
            return false;
        }
    }
    if(YOY_UNKNOWN_EN1!=""){
        if(!reg2.test(YOY_UNKNOWN_EN1)){
            $("#message").text("入口未知车型同比车车流量只能为百分数!!");
            return false;
        }
    }
    if(MOM_UNKNOWN_EN1!=""){
        if(!reg2.test(MOM_UNKNOWN_EN1)){
            $("#message").text("入口未知车型环比车车流量只能为百分数!!");
            return false;
        }
    }

    $("#message").text("");
    return  true;
}


function returnOWNERNAME() {
    var key =true;
    $("input[name='OWNERNAME']").each(
        function () {
            if ($(this).val()==""){
                key=false;
            }
        }
    );
    return key;
}
function returnCONTENT() {
    var key =true;
    $("input[name='CONTENT']").each(
        function () {
            if ($(this).val()==""){
                key=false;
            }
        }
    );
    return key;
}

//设置出口车流量当日客车车流量的值
function setCAR_EX(){
    var CAR_EX=$("#CAR_EX").val();
    var TRUCK_EX=$("#TRUCK_EX").val();
    if(CAR_EX!=""){
        if(reg.test(CAR_EX)){
            $("#Total_EX").val(parseInt(CAR_EX)+parseInt(TRUCK_EX));
            $("#message").text("");
        }else{
            $("#message").text("车流量只能为整数");
        }
    }
    else{
        $("#message").text("出口车流量当日客车车流量不能为空！");
    }

}
//设置出口车流量当日货车车流量的值
function setTRUCK_EX(){
    var TRUCK_EX=$("#TRUCK_EX").val();
    var CAR_EX=$("#CAR_EX").val();
    if(TRUCK_EX!=""){
        if(reg.test(TRUCK_EX)){
            $("#Total_EX").val(parseInt(CAR_EX)+parseInt(TRUCK_EX));
            $("#message").text("");
        }else{
            $("#message").text("车流量只能为整数");
        }
    }
    else{
        $("#message").text("出口车流量当日货车车流量不能为空！");
    }

}
//设置出口车流量同比客车车流量的值
function setYOY_CAR_EX(){
    var YOY_CAR_EX1=$("#YOY_CAR_EX").val();
    if(YOY_CAR_EX1!=""){
            if(reg2.test(YOY_CAR_EX1)){
                    $("#message").text("");
            }else{
                $("#message").text("出口车流量同比客车车流量只能为百分数");
        }
    }
    else{
        $("#message").text("出口车流量同比客车车流量不能为空！");
    }

}
//设置出口车流量同比货车车流量的值
function setYOY_TRUCK_EX(){
    var YOY_TRUCK_EX=$("#YOY_TRUCK_EX").val();
    if(YOY_TRUCK_EX!=""){
            if(reg2.test(YOY_TRUCK_EX)){
                    $("#message").text("");
            }else{
                $("#message").text("出口车流量同比货车车流量只能为百分数");
            }
    }
    else{
        $("#message").text("出口车流量同比货车车流量不能为空！");
    }

}
//设置出口车流量环比客车车流量的值
function setMOM_CAR_EX(){
    var MOM_CAR_EX1=$("#MOM_CAR_EX").val();

    if(MOM_CAR_EX1!=""){
            if(reg2.test(MOM_CAR_EX1)){
                    $("#message").text("");
            }else{
                $("#message").text("出口车流量环比客车车流量只能为百分数");
            }
    }else{
        $("#message").text("出口车流量同比客车车流量不能为空！");
    }

}
//设置出口车流量环比货车车流量的值
function setMOM_TRUCK_EX(){
    var MOM_TRUCK_EX1=$("#MOM_TRUCK_EX").val();
    if(MOM_TRUCK_EX1!=""){
            if(reg2.test(MOM_TRUCK_EX1)){
                    $("#message").text("");
        } else{
            $("#message").text("出口车流量当日货车车流量不能为空！");
        }
    }
    else{
        $("#message").text("出口车流量环比货车车流量不能为空！");
    }

}

//设置入口车流量当日客车车流量的值
function setCAR_EN(){
    var CAR_EN1=$("#CAR_EN").val();
    var TRUCK_EN=$("#TRUCK_EN").val();
    if(CAR_EN1!=""){
        if(reg.test(CAR_EN1)){
            $("#Total_EN").val(parseInt(CAR_EN1)+parseInt(TRUCK_EN));
            $("#message").text("");
        }else{
            $("#message").text("车流量只能为整数");
        }
    }
    else{
        $("#message").text("入口车流量当日客车车流量不能为空！");
    }

}
//设置入口车流量当日货车车流量的值
function setTRUCK_EN(){
    var TRUCK_EN=$("#TRUCK_EN").val();
    var CAR_EN1=$("#CAR_EN").val();
    if(TRUCK_EN!=""){
        if(reg.test(TRUCK_EN)){
            $("#Total_EN").val(parseInt(CAR_EN1)+parseInt(TRUCK_EN));
            $("#message").text("");
        }else{
            $("#message").text("车流量只能为整数");
        }
    }
    else{
        $("#message").text("入口车流量当日货车车流量不能为空！");
    }

}
//设置入口车流量同比客车车流量的值
function setYOY_CAR_EN(){
    var YOY_CAR_EN1=$("#YOY_CAR_EN").val();
    if(YOY_CAR_EN1!=""){
            if(reg2.test(YOY_CAR_EN1)){
                    $("#message").text("");
            }else{
                $("#message").text("入口车流量同比客车车流量只能为百分数");
            }
    }
    else{
        $("#message").text("入口车流量同比客车车流量不能为空！");
    }

}
//设置入口车流量同比货车车流量的值
function setYOY_TRUCK_EN(){
    var YOY_TRUCK_EN=$("#YOY_TRUCK_EN").val();
    if(YOY_TRUCK_EN!=""){
            if(reg2.test(YOY_TRUCK_EN)){
                    $("#message").text("");
            }else{
                $("#message").text("入口车流量同比货车车流量只能为百分数");
            }
    }
    else{
        $("#message").text("入口车流量同比货车车流量不能为空！");
    }

}
//设置入口车流量环比客车车流量的值
function setMOM_CAR_EN(){
    var MOM_CAR_EN=$("#MOM_CAR_EN").val();
    if(MOM_CAR_EN!=""){
          if(reg2.test(MOM_CAR_EN)){
                    $("#message").text("");
                } else{
                $("#message").text("入口车流量环比客车车流量只能为百分数");
            }
    } else{
        $("#message").text("入口车流量同比客车车流量不能为空！");
    }

}
//设置入口车流量环比货车车流量的值
function setMOM_TRUCK_EN(){
    var MOM_TRUCK_EN1=$("#MOM_TRUCK_EN").val();
    if(MOM_TRUCK_EN1!=""){
            if(reg2.test(MOM_TRUCK_EN1)){
                    $("#message").text("");
                }else{
                $("#message").text("入口车流量同比货车车流量只能为百分数");
            }
    }
    else{
        $("#message").text("入口车流量环比货车车流量不能为空！");
    }

}

//设置服务区当日人流量的值
function setPERSONFLOW(){
    var PERSONFLOW1=$("#PERSONFLOW").val();
    if(PERSONFLOW1!=""){
        if(reg.test(PERSONFLOW1)){
            $("#message").text("");
        }else{
            $("#message").text("服务区人流量只能为整数");
        }
    }
    else{
        $("#message").text("服务区人流量不能为空！");
    }

}
//设置服务区当日客车流量的值
function setCARFLOW(){
    var CARFLOW1=$("#CARFLOW").val();
    var TRUCKFLOW1=$("#TRUCKFLOW").val();
    if(CARFLOW1!=""){
        if(reg.test(CARFLOW1)){
            $("#Total").val(parseInt(CARFLOW1)+parseInt(TRUCKFLOW1));
            $("#message").text("");
        }else{
            $("#message").text("服务区客车流量只能为整数");
        }
    }
    else{
        $("#message").text("服务区客车流量不能为空！");
    }

}
//设置服务区当日货车流量的值
function setTRUCKFLOW(){
    var CARFLOW1=$("#CARFLOW").val();
    var TRUCKFLOW1=$("#TRUCKFLOW").val();
    if(TRUCKFLOW1!=""){
        if(reg.test(TRUCKFLOW1)){
            $("#Total").val(parseInt(CARFLOW1)+parseInt(TRUCKFLOW1));
            $("#message").text("");
        }else{
            $("#message").text("服务区货车流量只能为整数");
        }
    }
    else{
        $("#message").text("服务区货车流量不能为空！");
    }

}
//设置服务区环比人流量的值
function setMOM_PERSONFLOW(){
    var MOM_PERSONFLOW1=$("#MOM_PERSONFLOW").val();
    if(MOM_PERSONFLOW1!=""){
            if(reg2.test(MOM_PERSONFLOW1)){
                    $("#message").text("");
            }else{
                $("#message").text("服务区环比人流量只能为百分数");
        }
    }
    else{
        $("#message").text("服务区环比人流量不能为空！");
    }

}
//设置服务区环比客车流量的值
function setMOM_CARFLOW(){
    var MOM_CARFLOW1=$("#MOM_CARFLOW").val();
    if(MOM_CARFLOW1!=""){
            if(reg2.test(MOM_CARFLOW1)){
                    $("#message").text("");
            }else{
                $("#message").text("服务区环比客车流量只能为百分数");
            }
    }
    else{
        $("#message").text("服务区环比客车流量不能为空！");
    }

}
//设置服务区环比货车流量的值
function setMOM_TRUCKFLOW(){
    var MOM_TRUCKFLOW=$("#MOM_TRUCKFLOW").val();
    if(MOM_TRUCKFLOW!=""){
            if(reg2.test(MOM_TRUCKFLOW)){
                    $("#message").text("");
            }else{
                $("#message").text("服务区环比货车流量只能为百分数");
            }
    }
    else{
        $("#message").text("服务区环比货车流量不能为空！");
    }

}

//设置出口未知车型同比车流量
function setYOY_UNKNOWN_EX(){
    var YOY_UNKNOWN_EX=$("#YOY_UNKNOWN_EX").val();

    if(YOY_UNKNOWN_EX!=""){
        if(reg2.test(YOY_UNKNOWN_EX)){
                $("#message").text("");
        }else{
            $("#message").text("出口未知车型同比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("出口未知车型同比车流量不能为空！");
    }

}
//设置出口未知车型环比车流量
function setMOM_UNKNOWN_EX(){
    var MOM_UNKNOWN_EX=$("#MOM_UNKNOWN_EX").val();

    if(MOM_UNKNOWN_EX!=""){
        if(reg2.test(MOM_UNKNOWN_EX)){
                $("#message").text("");
        }else{
            $("#message").text("出口未知车型环比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("出口未知车型环比车流量不能为空！");
    }

}
//设置入口未知车型同比车流量
function setYOY_UNKNOWN_EN(){
    var YOY_UNKNOWN_EN1=$("#YOY_UNKNOWN_EN").val();
    if(YOY_UNKNOWN_EN1!=""){
        if(reg2.test(YOY_UNKNOWN_EN1)){
                $("#message").text("");
        }else{
            $("#message").text("入口未知车型同比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("入口未知车型同比车流量不能为空！");
    }

}

//设置入口未知车型环比车流量
function setMOM_UNKNOWN_EN(){
    var MOM_UNKNOWN_EN=$("#MOM_UNKNOWN_EN").val();
    if(MOM_UNKNOWN_EN!=""){
        if(reg2.test(MOM_UNKNOWN_EN)){
                $("#message").text("");
        }else{
            $("#message").text("入口未知车型环比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("入口未知车型环比车流量不能为空！");
    }

}