<%--
  Created by IntelliJ IDEA.
  User: 李沛然
  Date: 2020/4/26
  Time: 14:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>日报-车流</title>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
    <script src="../js/event.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
    <link rel="stylesheet" href="../css/event.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
<form action="${pageContext.request.contextPath}/report/daily" method="post" onsubmit="return check()">
    <input type="date" id="TOLLDATE" name="TOLLDATE" value="" />时，
    全省高速公路<b>出口车流量</b><input type="text" id="Total_EX" name="Total_EX" value="" readonly>辆（客车<input type="text" id="CAR_EX" name="CAR_EX" value="">辆、货车<input type="text" id="TRUCK_EX" name="TRUCK_EX" value="">辆），
    同比<input type="text" id="YOY_UNKNOWN_EX" name="YOY_UNKNOWN_EX" value="">（客车同比<input type="text" id="YOY_CAR_EX" name="YOY_CAR_EX" value="">、货车同比<input type="text" id="YOY_TRUCK_EX" name="YOY_TRUCK_EX" value="">），
    环比<input type="text" id="MOM_UNKNOWN_EX" name="MOM_UNKNOWN_EX" value="">（客车环比<input type="text" id="MOM_CAR_EX" name="MOM_CAR_EX" value="">、货车环比<input type="text" id="MOM_TRUCK_EX" name="MOM_TRUCK_EX" value="">）；
    <b>入口车流量</b><input type="text" id="Total_EN" name="Total_EX" value="" readonly>辆（客车<input type="text" id="CAR_EN" name="CAR_EN" value="">辆、货车<input type="text" id="TRUCK_EN" name="TRUCK_EN" value="">辆），
    同比<input type="text" id="YOY_UNKNOWN_EN" name="YOY_UNKNOWN_EN" value="">（客车同比<input type="text" id="YOY_CAR_EN" name="YOY_CAR_EN" value="">、货车同比<input type="text" id="YOY_TRUCK_EN" name="YOY_TRUCK_EN" value="">），
    环比<input type="text" id="MOM_UNKNOWN_EN" name="MOM_UNKNOWN_EN" value="">（客车环比<input type="text" id="MOM_CAR_EN" name="MOM_CAR_EN" value="">、货车环比<input type="text" id="MOM_TRUCK_EN" name="MOM_TRUCK_EN" value="">）。
    <br>
    公司高速公路服务区车流量<input type="text" id="Total" name="Total" value="" readonly>辆（客车<input type="text" id="CARFLOW" name="CARFLOW" value="">辆、货车<input type="text" id="TRUCKFLOW" name="TRUCKFLOW" value="">辆），
    客车环比<input type="text" id="MOM_CARFLOW" name="MOM_CARFLOW" value="">、货车环比<input type="text" id="MOM_TRUCKFLOW" name="MOM_TRUCKFLOW" value="">；
    人流量<input type="text" id="PERSONFLOW" name="PERSONFLOW" value="">人，环比<input type="text" id="MOM_PERSONFLOW" name="MOM_PERSONFLOW" value="">。
</form>

</body>
</html>
