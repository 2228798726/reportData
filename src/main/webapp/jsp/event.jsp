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
<form action="${pageContext.request.contextPath}/report/event" method="post" onsubmit="return check()">
    <div class="table-responsive">
        <div class="container">
            <table class="table table-bordered">
        <thead class="text-center">
        <tr class="row">
            <th scope="col" rowspan="3" class="col-md-0.48">日期</th>
            <th scope="col" colspan="6" class="col-md-2.88">出口车流量</th>
            <th scope="col" colspan="6" class="col-md-2.88">入口车流量</th>
            <th scope="col" colspan="6" class="col-md-2.88">服务区</th>
            <th scope="col" colspan="3" class="col-md-1.44">出口未知车型</th>
            <th scope="col" colspan="3" class="col-md-1.44">入口未知车型</th>
        </tr>
        <tr class="row">
            <th scope="col" colspan="2" class="col-md-0.96">当日</th>
            <th scope="col" colspan="2" class="col-md-0.96">同比</th>
            <th scope="col" colspan="2" class="col-md-0.96">环比</th>

            <th scope="col" colspan="2" class="col-md-0.96">当日</th>
            <th scope="col" colspan="2" class="col-md-0.96">同比</th>
            <th scope="col" colspan="2" class="col-md-0.96">环比</th>

            <th scope="col" colspan="3" class="col-md-1.44">当日</th>
            <th scope="col" colspan="3" class="col-md-1.44">环比</th>

            <th scope="col"  class="col-md-0.48">当日</th>
            <th scope="col"  class="col-md-0.48">同比</th>
            <th scope="col"  class="col-md-0.48">环比</th>

            <th scope="col"  class="col-md-0.48">当日</th>
            <th scope="col"  class="col-md-0.48">同比</th>
            <th scope="col"  class="col-md-0.48">环比</th>
        </tr>
        <tr class="row">
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>

            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>

            <th scope="col"  class="col-md-0.48">人流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">人车流量</th>
            <th scope="col"  class="col-md-0.48">客车车流量</th>
            <th scope="col"  class="col-md-0.48">货车车流量</th>

            <th scope="col"  class="col-md-0.48">车流量</th>
            <th scope="col"  class="col-md-0.48">车流量</th>
            <th scope="col"  class="col-md-0.48">车流量</th>
            <th scope="col"  class="col-md-0.48">车流量</th>
            <th scope="col"  class="col-md-0.48">车流量</th>
            <th scope="col"  class="col-md-0.48">车流量</th>

        </tr>
        </thead>
        <tbody>
        <tr class="row">
            <td scope="col" class="col-md-0.48"><input type="date" id="TOLLDATE" name="TOLLDATE" value="" /></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CAR_EX" name="CAR_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCK_EX" name="TRUCK_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_CAR_EX" name="YOY_CAR_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_TRUCK_EX" name="YOY_TRUCK_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CAR_EX" name="MOM_CAR_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCK_EX" name="MOM_TRUCK_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CAR_EN" name="CAR_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCK_EN" name="TRUCK_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_CAR_EN" name="YOY_CAR_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_TRUCK_EN" name="YOY_TRUCK_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CAR_EN" name="MOM_CAR_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCK_EN" name="MOM_TRUCK_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="PERSONFLOW" name="PERSONFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CARFLOW" name="CARFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCKFLOW" name="TRUCKFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_PERSONFLOW" name="MOM_PERSONFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CARFLOW" name="MOM_CARFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCKFLOW" name="MOM_TRUCKFLOW" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="UNKNOWN_EX" name="UNKNOWN_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="UNKNOWN_EN" name="UNKNOWN_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_UNKNOWN_EX" name="YOY_UNKNOWN_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_UNKNOWN_EN" name="YOY_UNKNOWN_EN" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_UNKNOWN_EX" name="MOM_UNKNOWN_EX" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_UNKNOWN_EN" name="MOM_UNKNOWN_EN" value=""></td>
        </tr>
        <tr class="row">
            <td scope="col" class="col-md-0.48"><input type="date" id="TOLLDATE1" name="TOLLDATE1" value="" /></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CAR_EX1" name="CAR_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCK_EX1" name="TRUCK_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_CAR_EX1" name="YOY_CAR_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_TRUCK_EX1" name="YOY_TRUCK_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CAR_EX1" name="MOM_CAR_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCK_EX1" name="MOM_TRUCK_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CAR_EN1" name="CAR_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCK_EN1" name="TRUCK_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_CAR_EN1" name="YOY_CAR_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_TRUCK_EN1" name="YOY_TRUCK_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CAR_EN1" name="MOM_CAR_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCK_EN1" name="MOM_TRUCK_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="PERSONFLOW1" name="PERSONFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="CARFLOW1" name="CARFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="TRUCKFLOW1" name="TRUCKFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_PERSONFLOW1" name="MOM_PERSONFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_CARFLOW1" name="MOM_CARFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="MOM_TRUCKFLOW1" name="MOM_TRUCKFLOW1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="UNKNOWN_EX1" name="UNKNOWN_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="UNKNOWN_EN1" name="UNKNOWN_EN1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_UNKNOWN_EX1" name="YOY_UNKNOWN_EX1" value=""></td>
            <td scope="col" class="col-md-0.48"><input type="number" id="YOY_UNKNOWN_EN1" name="YOY_UNKNOWN_EN1" value=""></td>
            <td scope="col"class="col-md-0.48"><input type="number" id="MOM_UNKNOWN_EX1" name="MOM_UNKNOWN_EX1" value=""></td>
            <td scope="col"><input type="number" id="MOM_UNKNOWN_EN1" name="MOM_UNKNOWN_EN1" value=""></td>
        </tr>
        <tr>
            <td scope="col" align="center" colspan="25">
                <button type="submit" class="btn btn-primary mb-2">提交</button>
                <p align="center"><font color="red"><span id="message">${msg}</span></font></p>
            </td>
        </tr>
        </tbody>
    </table>
        </div>
    </div>
</form>
</body>
</html>
