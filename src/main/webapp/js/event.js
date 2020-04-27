var reg = /^([0-9])+$/;
var reg2 = /^([-]|[0-9])+([.]|[0-9])+\%$/;
var reg1 = /^([0-9])+$/;

//判断数据不能为空
function check() {
    var TOLLDATE1=$("#TOLLDATE").val();
    var CAR_EX1=$("#CAR_EX1").val();
    var TRUCK_EX1=$("#TRUCK_EX1").val();
    var YOY_CAR_EX1=$("#YOY_CAR_EX1").val();
    var YOY_TRUCK_EX1=$("#YOY_TRUCK_EX1").val();
    var MOM_CAR_EX1=$("#MOM_CAR_EX1").val();
    var MOM_TRUCK_EX1=$("#MOM_TRUCK_EX1").val();
    var CAR_EN1=$("#CAR_EN1").val();
    var TRUCK_EN1=$("#TRUCK_EN1").val();
    var YOY_CAR_EN1=$("#YOY_CAR_EN1").val();
    var YOY_TRUCK_EN1=$("#YOY_TRUCK_EN1").val();
    var MOM_CAR_EN1=$("#MOM_CAR_EN1").val();
    var MOM_TRUCK_EN1=$("#MOM_TRUCK_EN1").val();
    var PERSONFLOW1=$("#PERSONFLOW1").val();
    var MOM_PERSONFLOW1=$("#MOM_PERSONFLOW1").val();
    var CARFLOW1=$("#CARFLOW1").val();
    var TRUCKFLOW1=$("#TRUCKFLOW1").val();
    var MOM_CARFLOW1=$("#MOM_CARFLOW1").val();
    var MOM_TRUCKFLOW1=$("#MOM_TRUCKFLOW1").val();
    var UNKNOWN_EX1=$("#UNKNOWN_EX1").val();
    var UNKNOWN_EN1=$("#UNKNOWN_EN1").val();
    var YOY_UNKNOWN_EX1=$("#YOY_UNKNOWN_EX1").val();
    var YOY_UNKNOWN_EN1=$("#YOY_UNKNOWN_EN1").val();
    var MOM_UNKNOWN_EX1=$("#MOM_UNKNOWN_EX1").val();
    var MOM_UNKNOWN_EN1=$("#MOM_UNKNOWN_EN1").val();

    if (TOLLDATE1 == ""){
        $("#message").text("日期不能为空！");
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
    if(UNKNOWN_EX1!=""){
        if(!reg.test(UNKNOWN_EX1)){
            $("#message").text("出口未知车型当日车车流量只能为整数!");
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
    if(UNKNOWN_EN1!=""){
        if(!reg.test(UNKNOWN_EN1)){
            $("#message").text("入口未知车型当日车车流量只能为整数!");
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

//将百分数转变为普通数字
function transNumber(str) {
    if (str.indexOf("-") != -1 ){
        var newstr=str.replace("%", "").replace("-","");
        if(newstr.substr(-2, 1)=="."){
            newstr=newstr.replace(".","");
        }
        var number=parseFloat(newstr)/100*-1;
        return number;
    }else{
        var newstr=str.replace(/%/, "");
        if(newstr.substr(-2, 1)=="."){
            newstr=newstr.replace(".","");
        }
        var number=parseFloat(newstr)/100;
        return number;
    }

}

//设置出口车流量当日客车车流量的值
function setCAR_EX(){
    var CAR_EX1=$("#CAR_EX1").val();

    if(CAR_EX1!=""){
        if(reg.test(CAR_EX1)){
            $("#CAR_EX").val(CAR_EX1);
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
    var TRUCK_EX=$("#TRUCK_EX1").val();
    if(TRUCK_EX!=""){
        if(reg.test(TRUCK_EX)){
            $("#TRUCK_EX").val(TRUCK_EX);
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
function setYOY_CAR_EX1(){
    var YOY_CAR_EX1=$("#YOY_CAR_EX1").val();
    var CAR_EX=$("#CAR_EX").val();
    if(YOY_CAR_EX1!=""){
        if(CAR_EX!=""){
            if(reg2.test(YOY_CAR_EX1)){
                if(reg1.test(CAR_EX)){
                    var reslut= parseInt(parseInt(CAR_EX)/(1+ transNumber(YOY_CAR_EX1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#YOY_CAR_EX").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("出口车流量当日客车车流量只能为整数");
                }
            }else{
                $("#message").text("出口车流量同比客车车流量只能为百分数");
            }
        } else{
            $("#message").text("出口车流量当日客车车流量不能为空！");
        }
    }
    else{
        $("#message").text("出口车流量同比客车车流量不能为空！");
    }

}
//设置出口车流量同比货车车流量的值
function setYOY_TRUCK_EX(){
    var YOY_TRUCK_EX1=$("#YOY_TRUCK_EX1").val();
    var TRUCK_EX=$("#TRUCK_EX").val();
    if(YOY_TRUCK_EX1!=""){
        if(TRUCK_EX!=""){
            if(reg2.test(YOY_TRUCK_EX1)){
                if(reg1.test(TRUCK_EX)){
                    var reslut= parseInt(parseInt(TRUCK_EX)/(1+ transNumber(YOY_TRUCK_EX1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#YOY_TRUCK_EX").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("出口车流量当日货车车流量只能为整数");
                }
            }else{
                $("#message").text("出口车流量同比货车车流量只能为百分数");
            }
        } else{
            $("#message").text("出口车流量当日货车车流量不能为空！");
        }
    }
    else{
        $("#message").text("出口车流量同比货车车流量不能为空！");
    }

}
//设置出口车流量环比客车车流量的值
function setMOM_CAR_EX(){
    var MOM_CAR_EX1=$("#MOM_CAR_EX1").val();
    var CAR_EX=$("#CAR_EX").val();

    if(MOM_CAR_EX1!=""){
        if(CAR_EX!=""){
            if(reg2.test(MOM_CAR_EX1)){
                if(reg1.test(CAR_EX)){
                    var reslut= parseInt(parseInt(CAR_EX)/(1+ transNumber(MOM_CAR_EX1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_CAR_EX").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("出口车流量当日客车车流量只能为整数");
                }
            }else{
                $("#message").text("出口车流量环比客车车流量只能为保留两位小数的百分数");
            }
        } else{
            $("#message").text("出口车流量当日客车车流量不能为空！");
        }
    }
    else{
        $("#message").text("出口车流量同比客车车流量不能为空！");
    }

}
//设置出口车流量环比货车车流量的值
function setMOM_TRUCK_EX(){
    var MOM_TRUCK_EX1=$("#MOM_TRUCK_EX1").val();
    var TRUCK_EX=$("#TRUCK_EX").val();
    if(MOM_TRUCK_EX1!=""){
        if(TRUCK_EX!=""){
            if(reg2.test(MOM_TRUCK_EX1)){
                if(reg1.test(TRUCK_EX)){
                    var reslut= parseInt(parseInt(TRUCK_EX)/(1+ transNumber(MOM_TRUCK_EX1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_TRUCK_EX").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("出口车流量当日货车车流量只能为整数");
                }
            }else{
                $("#message").text("出口车流量同比货车车流量只能为百分数");
            }
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
    var CAR_EN1=$("#CAR_EN1").val();
    var reg = /^([0-9])+$/;
    // var reg = /^([-]|[0-9])+\.([0-9]+\%)$/;
    if(CAR_EN1!=""){
        if(reg.test(CAR_EN1)){
            $("#CAR_EN").val(CAR_EN1);
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
    var TRUCK_EN=$("#TRUCK_EN1").val();
    if(TRUCK_EN!=""){
        if(reg.test(TRUCK_EN)){
            $("#TRUCK_EN").val(TRUCK_EN);
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
    var YOY_CAR_EN1=$("#YOY_CAR_EN1").val();
    var CAR_EN=$("#CAR_EN").val();
    if(YOY_CAR_EN1!=""){
        if(CAR_EN!=""){
            if(reg2.test(YOY_CAR_EN1)){
                if(reg1.test(CAR_EN)){
                    var reslut= parseInt(parseInt(CAR_EN)/(1+ transNumber(YOY_CAR_EN1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#YOY_CAR_EN").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("入口车流量当日客车车流量只能为整数");
                }
            }else{
                $("#message").text("入口车流量同比客车车流量只能为百分数");
            }
        } else{
            $("#message").text("入口车流量当日客车车流量不能为空！");
        }
    }
    else{
        $("#message").text("入口车流量同比客车车流量不能为空！");
    }

}
//设置入口车流量同比货车车流量的值
function setYOY_TRUCK_EN(){
    var YOY_TRUCK_EN=$("#YOY_TRUCK_EN1").val();
    var TRUCK_EN=$("#TRUCK_EN").val();
    if(YOY_TRUCK_EN!=""){
        if(TRUCK_EN!=""){
            if(reg2.test(YOY_TRUCK_EN)){
                if(reg1.test(TRUCK_EN)){
                    var reslut= parseInt(parseInt(TRUCK_EN)/(1+ transNumber(YOY_TRUCK_EN)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#YOY_TRUCK_EN").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("入口车流量当日货车车流量只能为整数");
                }
            }else{
                $("#message").text("入口车流量同比货车车流量只能为百分数");
            }
        } else{
            $("#message").text("入口车流量当日货车车流量不能为空！");
        }
    }
    else{
        $("#message").text("入口车流量同比货车车流量不能为空！");
    }

}
//设置入口车流量环比客车车流量的值
function setMOM_CAR_EN(){
    var MOM_CAR_EN=$("#MOM_CAR_EN1").val();
    var CAR_EN=$("#CAR_EN").val();
    if(MOM_CAR_EN!=""){
        if(CAR_EN!=""){
            if(reg2.test(MOM_CAR_EN)){
                if(reg1.test(CAR_EN)){
                    var reslut= parseInt(parseInt(CAR_EN)/(1+ transNumber(MOM_CAR_EN)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_CAR_EN").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("入口车流量当日客车车流量只能为整数");
                }
            }else{
                $("#message").text("入口车流量环比客车车流量只能为百分数");
            }
        } else{
            $("#message").text("入口车流量当日客车车流量不能为空！");
        }
    }
    else{
        $("#message").text("入口车流量同比客车车流量不能为空！");
    }

}
//设置入口车流量环比货车车流量的值
function setMOM_TRUCK_EN(){
    var MOM_TRUCK_EN1=$("#MOM_TRUCK_EN1").val();
    var TRUCK_EN=$("#TRUCK_EN").val();
    if(MOM_TRUCK_EN1!=""){
        if(TRUCK_EN!=""){
            if(reg2.test(MOM_TRUCK_EN1)){
                if(reg1.test(TRUCK_EN)){
                    var reslut= parseInt(parseInt(TRUCK_EN)/(1+ transNumber(MOM_TRUCK_EN1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_TRUCK_EN").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("入口车流量当日货车车流量只能为整数");
                }
            }else{
                $("#message").text("入口车流量同比货车车流量只能为百分数");
            }
        } else{
            $("#message").text("入口车流量当日货车车流量不能为空！");
        }
    }
    else{
        $("#message").text("入口车流量环比货车车流量不能为空！");
    }

}

//设置服务区当日人流量的值
function setPERSONFLOW(){
    var PERSONFLOW1=$("#PERSONFLOW1").val();
    if(PERSONFLOW1!=""){
        if(reg.test(PERSONFLOW1)){
            $("#PERSONFLOW").val(PERSONFLOW1);
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
    var CARFLOW1=$("#CARFLOW1").val();
    if(CARFLOW1!=""){
        if(reg.test(CARFLOW1)){
            $("#CARFLOW").val(CARFLOW1);
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
    var TRUCKFLOW1=$("#TRUCKFLOW1").val();
    if(TRUCKFLOW1!=""){
        if(reg.test(TRUCKFLOW1)){
            $("#TRUCKFLOW").val(TRUCKFLOW1);
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
    var MOM_PERSONFLOW1=$("#MOM_PERSONFLOW1").val();
    var PERSONFLOW=$("#PERSONFLOW").val();
    if(MOM_PERSONFLOW1!=""){
        if(PERSONFLOW!=""){
            if(reg2.test(MOM_PERSONFLOW1)){
                if(reg1.test(PERSONFLOW)){
                    var reslut= parseInt(parseInt(PERSONFLOW)/(1+ transNumber(MOM_PERSONFLOW1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_PERSONFLOW").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("服务区当日人流量只能为整数");
                }
            }else{
                $("#message").text("服务区环比人流量只能为百分数");
            }
        } else{
            $("#message").text("服务区当日人流量不能为空！");
        }
    }
    else{
        $("#message").text("服务区环比人流量不能为空！");
    }

}
//设置服务区环比客车流量的值
function setMOM_CARFLOW(){
    var MOM_CARFLOW1=$("#MOM_CARFLOW1").val();
    var CARFLOW=$("#CARFLOW").val();
    if(MOM_CARFLOW1!=""){
        if(CARFLOW!=""){
            if(reg2.test(MOM_CARFLOW1)){
                if(reg1.test(CARFLOW)){
                    var reslut= parseInt(parseInt(CARFLOW)/(1+ transNumber(MOM_CARFLOW1)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_CARFLOW").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("服务区当日客车流量只能为整数");
                }
            }else{
                $("#message").text("服务区环比客车流量只能为百分数");
            }
        } else{
            $("#message").text("服务区当日客车流量不能为空！");
        }
    }
    else{
        $("#message").text("服务区环比客车流量不能为空！");
    }

}
//设置服务区环比货车流量的值
function setMOM_TRUCKFLOW(){
    var MOM_TRUCKFLOW=$("#MOM_TRUCKFLOW1").val();
    var TRUCKFLOW=$("#TRUCKFLOW").val();
    if(MOM_TRUCKFLOW!=""){
        if(TRUCKFLOW!=""){
            if(reg2.test(MOM_TRUCKFLOW)){
                if(reg1.test(TRUCKFLOW)){
                    var reslut= parseInt(parseInt(TRUCKFLOW)/(1+ transNumber(MOM_TRUCKFLOW)));
                    if (reslut%1!=0){
                        reslut=reslut+1;
                    }
                    $("#MOM_TRUCKFLOW").val(reslut);
                    $("#message").text("");
                }else {
                    $("#message").text("服务区当日货车流量只能为整数");
                }
            }else{
                $("#message").text("服务区环比货车流量只能为百分数");
            }
        } else{
            $("#message").text("服务区当日货车流量不能为空！");
        }
    }
    else{
        $("#message").text("服务区环比货车流量不能为空！");
    }

}

//设置出口未知车型当日车流量
function setUNKNOWN_EX(){
    var UNKNOWN_EX1=$("#UNKNOWN_EX1").val();
    if(UNKNOWN_EX1!=""){
        if(reg.test(UNKNOWN_EX1)){
            $("#UNKNOWN_EX").val(UNKNOWN_EX1);
            $("#message").text("");
        }else{
            $("#message").text("出口未知车型当日车流量只能为整数");
        }
    }
    else{
        $("#message").text("出口未知车型当日车流量不能为空！");
    }

}
//设置出口未知车型同比车流量
function setYOY_UNKNOWN_EX(){
    var UNKNOWN_EX=$("#UNKNOWN_EX").val();
    var CAR_EX=$("#CAR_EX").val();
    var TRUCK_EX=$("#TRUCK_EX").val();

    var YOY_CAR_EX=$("#YOY_CAR_EX").val();
    var YOY_TRUCK_EX=$("#YOY_TRUCK_EX").val();

    var YOY_UNKNOWN_EX=$("#YOY_UNKNOWN_EX1").val();

    if(YOY_UNKNOWN_EX!=""){
        if(reg2.test(YOY_UNKNOWN_EX)){
            if(UNKNOWN_EX!=""&&CAR_EX!=""&&TRUCK_EX!=""&&YOY_CAR_EX!=""&&YOY_TRUCK_EX!=""){
                var result=(parseInt(UNKNOWN_EX)+parseInt(CAR_EX)+ parseInt(TRUCK_EX)- parseInt(YOY_CAR_EX)
                    -parseInt(YOY_TRUCK_EX)-(transNumber(YOY_UNKNOWN_EX)*(parseInt(YOY_CAR_EX)+parseInt(YOY_TRUCK_EX))))/(1+transNumber(YOY_UNKNOWN_EX));
                if(result%1!=0){
                    result=parseInt(parseInt(result)+1);
                }
                $("#YOY_UNKNOWN_EX").val(result);
                $("#message").text("");
            }else {
                $("#message").text("出口车流量数据不能为空");
            }

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
    var UNKNOWN_EX=$("#UNKNOWN_EX").val();
    var CAR_EX=$("#CAR_EX").val();
    var TRUCK_EX=$("#TRUCK_EX").val();

    var MOM_CAR_EX=$("#MOM_CAR_EX").val();
    var MOM_TRUCK_EX=$("#MOM_TRUCK_EX").val();

    var MOM_UNKNOWN_EX=$("#MOM_UNKNOWN_EX1").val();

    if(MOM_UNKNOWN_EX!=""){
        if(reg2.test(MOM_UNKNOWN_EX)){
            if(UNKNOWN_EX!=""&&CAR_EX!=""&&TRUCK_EX!=""&&MOM_CAR_EX!=""&&MOM_TRUCK_EX!=""){
                var result=(parseInt(UNKNOWN_EX)+parseInt(CAR_EX)+ parseInt(TRUCK_EX)- parseInt(MOM_CAR_EX)
                    -parseInt(MOM_TRUCK_EX)-transNumber(MOM_UNKNOWN_EX)*(parseInt(MOM_CAR_EX)+parseInt(MOM_TRUCK_EX)))/(1+transNumber(MOM_UNKNOWN_EX));
                if(result%1!=0){
                    result=parseInt(parseInt(result)+1);
                }
                $("#MOM_UNKNOWN_EX").val(result);
                $("#message").text("");
            }else {
                $("#message").text("出口车流量数据不能为空");
            }

        }else{
            $("#message").text("出口未知车型环比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("出口未知车型环比车流量不能为空！");
    }

}

//设置入口未知车型当日车流量
function setUNKNOWN_EN(){
    var UNKNOWN_EN1=$("#UNKNOWN_EN1").val();
    if(UNKNOWN_EN1!=""){
        if(reg.test(UNKNOWN_EN1)){
            $("#UNKNOWN_EN").val(UNKNOWN_EN1);
            $("#message").text("");
        }else{
            $("#message").text("入口未知车型当日车流量只能为整数");
        }
    }
    else{
        $("#message").text("入口未知车型当日车流量不能为空！");
    }

}
//设置入口未知车型同比车流量
function setYOY_UNKNOWN_EN1(){
    var UNKNOWN_EN=$("#UNKNOWN_EN").val();
    var CAR_EN=$("#CAR_EN").val();
    var TRUCK_EN=$("#TRUCK_EN").val();

    var YOY_CAR_EN=$("#YOY_CAR_EN").val();
    var YOY_TRUCK_EN=$("#YOY_TRUCK_EN").val();

    var YOY_UNKNOWN_EN1=$("#YOY_UNKNOWN_EN1").val();
    if(YOY_UNKNOWN_EN1!=""){
        if(reg2.test(YOY_UNKNOWN_EN1)){
            if(UNKNOWN_EN!=""&&CAR_EN!=""&&TRUCK_EN!=""&&YOY_CAR_EN!=""&&YOY_TRUCK_EN!=""){
                var result=(parseInt(UNKNOWN_EN)+parseInt(CAR_EN)+ parseInt(TRUCK_EN)- parseInt(YOY_CAR_EN)
                    -parseInt(YOY_TRUCK_EN)-(transNumber(YOY_UNKNOWN_EN1)*(parseInt(YOY_CAR_EN)+parseInt(YOY_TRUCK_EN))))/(1+transNumber(YOY_UNKNOWN_EN1));
                if(result%1!=0){
                    result=parseInt(parseInt(result)+1);
                }
                $("#YOY_UNKNOWN_EN").val(result);
                $("#message").text("");
            }else {
                $("#message").text("入口车流量数据不能为空");
            }

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
    var UNKNOWN_EN=$("#UNKNOWN_EN").val();
    var CAR_EN=$("#CAR_EN").val();
    var TRUCK_EN=$("#TRUCK_EN").val();

    var MOM_CAR_EN=$("#MOM_CAR_EN").val();
    var MOM_TRUCK_EN=$("#MOM_TRUCK_EN").val();

    var MOM_UNKNOWN_EN=$("#MOM_UNKNOWN_EN1").val();

    if(MOM_UNKNOWN_EN!=""){
        if(reg2.test(MOM_UNKNOWN_EN)){
            if(UNKNOWN_EN!=""&&CAR_EN!=""&&TRUCK_EN!=""&&MOM_CAR_EN!=""&&MOM_TRUCK_EN!=""){
                var result=(parseInt(UNKNOWN_EN)+parseInt(CAR_EN)+ parseInt(TRUCK_EN)- parseInt(MOM_CAR_EN)
                    -parseInt(MOM_TRUCK_EN)-transNumber(MOM_UNKNOWN_EN)*(parseInt(MOM_CAR_EN)+parseInt(MOM_TRUCK_EN)))/(1+transNumber(MOM_UNKNOWN_EN));
                if(result%1!=0){
                    result=parseInt(parseInt(result)+1);
                }
                $("#MOM_UNKNOWN_EN").val(result);
                $("#message").text("");
            }else {
                $("#message").text("入口车流量数据不能为空");
            }

        }else{
            $("#message").text("入口未知车型环比车流量只能为百分数！");
        }
    }
    else{
        $("#message").text("入口未知车型环比车流量不能为空！");
    }

}