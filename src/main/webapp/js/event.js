//判断数据不能为空
function check() {
    var TOLLDATE1=$("#TOLLDATE1").val();
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
    var CONTENT=$("#CONTENT").val();
    var CONTENT=$("#CONTENT").val();
    var CONTENT=$("#CONTENT").val();
    var CONTENT=$("#CONTENT").val();
    var CONTENT=$("#CONTENT").val();


    if (TOLLDATE1 == ""){
        $("#message").text("日期不能为空！");
        return false;
    }
    if (CAR_EX1 == ""){
        $("#message").text("出口车流量当日客车车流量不能为空！");
        return false;
    }
    if (TRUCK_EX1 == ""){
        $("#message").text("出口车流量当日货车车流量不能为空！");
        return false;
    }
    if (YOY_CAR_EX1 == ""){
        $("#message").text("出口车流量同比客车车流量不能为空！");
        return false;
    }
    if (YOY_TRUCK_EX1 == ""){
        $("#message").text("出口车流量同比货车车流量不能为空！");
        return false;
    }
    if (MOM_CAR_EX1 == ""){
        $("#message").text("出口车流量环比客车车流量不能为空！");
        return false;
    }
    if (MOM_TRUCK_EX1 == ""){
        $("#message").text("出口车流量环比货车车流量不能为空！");
        return false;
    }
    if (CAR_EN1 == ""){
        $("#message").text("入口车流量当日客车车流量不能为空！");
        return false;
    }
    if (TRUCK_EN1 == ""){
        $("#message").text("入口车流量当日货车车流量不能为空！");
        return false;
    }
    if (YOY_CAR_EN1 == ""){
        $("#message").text("入口车流量同比客车车流量不能为空！");
        return false;
    }
    if (YOY_TRUCK_EN1 == ""){
        $("#message").text("入口车流量同比货车车流量不能为空！");
        return false;
    }
    if (MOM_CAR_EN1 == ""){
        $("#message").text("入口车流量环比货车车流量不能为空！");
        return false;
    }
    if (MOM_TRUCK_EN1 == ""){
        $("#message").text("入口车流量环比货车车流量不能为空！");
        return false;
    }
    if (PERSONFLOW1 == ""){
        $("#message").text("服务区当日人流量不能为空！");
        return false;
    }
    if (MOM_PERSONFLOW1 == ""){
        $("#message").text("服务区环比人流量不能为空！");
        return false;
    }
    if (CARFLOW1 == ""){
        $("#message").text("服务区当日客车流量不能为空！");
        return false;
    }
    if (TRUCKFLOW1 == ""){
        $("#message").text("服务器当日货车车流量不能为空！");
        return false;
    }
    if (MOM_CARFLOW1 == ""){
        $("#message").text("服务区环比客车流量不能为空！");
        return false;
    }
    if (MOM_TRUCKFLOW1 == ""){
        $("#message").text("服务区环比货车车流量不能为空！");
        return false;
    }

    $("#message").text("");
    return  true;
}