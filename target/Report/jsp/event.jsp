<%--
  Created by IntelliJ IDEA.
  User: 李沛然
  Date: 2020/4/22
  Time: 22:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
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
    <table class="table table-bordered">
        <thead class="text-center">
        <tr>
            <th scope="col" rowspan="3" id="th1">日期</th>
            <th scope="col" colspan="6">出口车流量</th>
            <th scope="col" colspan="6">入口车流量</th>
            <th scope="col" colspan="6">服务区</th>
            <th scope="col" colspan="3">出口未知车型</th>
            <th scope="col" colspan="3">入口未知车型</th>
        </tr>
        <tr>
            <th scope="col" colspan="2">当日</th>
            <th scope="col" colspan="2">同比</th>
            <th scope="col" colspan="2">环比</th>

            <th scope="col" colspan="2">当日</th>
            <th scope="col" colspan="2">同比</th>
            <th scope="col" colspan="2">环比</th>

            <th scope="col" colspan="3">当日</th>
            <th scope="col" colspan="3">环比</th>

            <th scope="col">当日</th>
            <th scope="col">同比</th>
            <th scope="col">环比</th>

            <th scope="col">当日</th>
            <th scope="col">同比</th>
            <th scope="col">环比</th>
        </tr>
        <tr>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>

            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>

            <th scope="col">人流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>
            <th scope="col">人流量</th>
            <th scope="col">客车车流量</th>
            <th scope="col">货车车流量</th>

            <th scope="col">车流量</th>
            <th scope="col">车流量</th>
            <th scope="col">车流量</th>
            <th scope="col">车流量</th>
            <th scope="col">车流量</th>
            <th scope="col">车流量</th>

        </tr>
        </thead>
        <tbody>
        <tr>

            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col"><input type="text" id="UNKNOWN_EX" name="UNKNOWN_EX" value=""></td>
            <td scope="col"><input type="text" id="UNKNOWN_EN" name="UNKNOWN_EN" value=""></td>
            <td scope="col"></td>
            <td scope="col"></td>
        </tr>
        <tr>
            <td scope="col"><input type="text" id="CAR_EX1" name="CAR_EX1" value="" onblur="setCAR_EX()"></td>
            <td scope="col"><input type="text" id="TRUCK_EX1" name="TRUCK_EX1" value="" onblur="setTRUCK_EX()"></td>
            <td scope="col"><input type="text" id="YOY_CAR_EX1" name="YOY_CAR_EX1" value="" onblur="setYOY_CAR_EX1()"></td>
            <td scope="col"><input type="text" id="YOY_TRUCK_EX1" name="YOY_TRUCK_EX1" value="" onblur="setYOY_TRUCK_EX()"></td>
            <td scope="col"><input type="text" id="MOM_CAR_EX1" name="MOM_CAR_EX1" value="" onblur="setMOM_CAR_EX()"></td>
            <td scope="col"><input type="text" id="MOM_TRUCK_EX1" name="MOM_TRUCK_EX1" value="" onblur="setMOM_TRUCK_EX()"></td>
            <td scope="col"><input type="text" id="CAR_EN1" name="CAR_EN1" value="" onblur="setCAR_EN()"></td>
            <td scope="col"><input type="text" id="TRUCK_EN1" name="TRUCK_EN1" value="" onblur="setTRUCK_EN()"></td>
            <td scope="col"><input type="text" id="YOY_CAR_EN1" name="YOY_CAR_EN1" value="" onblur="setYOY_CAR_EN()"></td>
            <td scope="col"><input type="text" id="YOY_TRUCK_EN1" name="YOY_TRUCK_EN1" value="" onblur="setYOY_TRUCK_EN()"></td>
            <td scope="col"><input type="text" id="MOM_CAR_EN1" name="MOM_CAR_EN1" value="" onblur="setMOM_CAR_EN()"></td>
            <td scope="col"><input type="text" id="MOM_TRUCK_EN1" name="MOM_TRUCK_EN1" value="" onblur="setMOM_TRUCK_EN()"></td>
            <td scope="col"><input type="text" id="PERSONFLOW1" name="PERSONFLOW1" value="" onblur="setPERSONFLOW()"></td>
            <td scope="col"><input type="text" id="CARFLOW1" name="CARFLOW1" value="" onblur="setCARFLOW()"></td>
            <td scope="col"><input type="text" id="TRUCKFLOW1" name="TRUCKFLOW1" value="" onblur="setTRUCKFLOW()"></td>
            <td scope="col"><input type="text" id="MOM_PERSONFLOW1" name="MOM_PERSONFLOW1" value="" onblur="setMOM_PERSONFLOW()"></td>
            <td scope="col"><input type="text" id="MOM_CARFLOW1" name="MOM_CARFLOW1" value="" onblur="setMOM_CARFLOW()"></td>
            <td scope="col"><input type="text" id="MOM_TRUCKFLOW1" name="MOM_TRUCKFLOW1" value="" onblur="setMOM_TRUCKFLOW()"></td>
            <td scope="col"><input type="text" id="UNKNOWN_EX1" name="UNKNOWN_EX1" value="" onblur="setUNKNOWN_EX()"></td>
            <td scope="col"><input type="text" id="YOY_UNKNOWN_EX1" name="YOY_UNKNOWN_EX1" value="" onblur="setYOY_UNKNOWN_EX()"></td>
            <td scope="col"><input type="text" id="MOM_UNKNOWN_EX1" name="MOM_UNKNOWN_EX1" value="" onblur="setMOM_UNKNOWN_EX()"></td>
            <td scope="col"><input type="text" id="UNKNOWN_EN1" name="UNKNOWN_EN1" value="" onblur="setUNKNOWN_EN()"></td>
            <td scope="col"><input type="text" id="YOY_UNKNOWN_EN1" name="YOY_UNKNOWN_EN1" value="" onblur="setYOY_UNKNOWN_EN1()"></td>
            <td scope="col"><input type="text" id="MOM_UNKNOWN_EN1" name="MOM_UNKNOWN_EN1" value="" onblur="setMOM_UNKNOWN_EN()"></td>
        </tr>
        <tr>
            <td scope="col" align="center" colspan="25">
                <p align="center"><font color="red"><span id="message">${msg}</span></font></p>
                <button type="submit" class="btn btn-primary mb-2">提交</button>
            </td>
        </tr>
        </tbody>
    </table>
</form>
</body>
</html>
