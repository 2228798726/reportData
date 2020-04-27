<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
    <title>日报-事件</title>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
    <script src="js/index.js"></script>
    <script src="js/index2.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
    <link rel="stylesheet" href="css/index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
<form method="post" onsubmit="return check()">
    <div class="table-responsive">
        <div class="container">
        <table class="table table-bordered" id="eventTable">
        <thead class="text-center">
        <tr class="row">
            <th scope="col" class="col-sm-12 col-md-2" >日期</th>
            <th scope="col" class="col-sm-12 col-md-2" >事件类型</th>
            <th scope="col" class="col-sm-12 col-md-2" >管理处</th>
            <th scope="col" class="col-sm-12 col-md-6" >内容</th>
        </tr>
        </thead>
        <tbody>
        <tr  class="row" id="col">
            <td scope="col" class="col-sm-12 col-md-2"><input class="form-control" type="date" id="TOLLDATE" name="TOLLDATE" value="" /></td>
            <td scope="col" class="col-sm-12 col-md-2">
                <select class="form-control" id="TYPE" name="TYPE">
                <option value="1" selected>拥堵1小时</option>
                <option value="2">拥堵1-2小时</option>
                <option value="3">拥堵2小时以上</option>
                </select></td>
            <td scope="col" class="col-sm-12 col-md-2">
                <input class="form-control" type="textarea" id="OWNERNAME"  name="OWNERNAME" value="" />
            </td>
            <td scope="col" class="col-sm-12 col-md-5"><input class="form-control" type="textarea" id="CONTENT" name="CONTENT" value="" /></td>
            <td class="col-md-1">&nbsp;<button onclick="deleteTrRow(this)" class="btn btn-primary mb-2">删除</button></td>
        </tr>
        </tbody>
    </table>
            <button onclick="addFun()" class="btn btn-primary mb-2">增加一行</button>
            <p>
                <input type="date" id="TOLLDATE_Daily" name="TOLLDATE_Car" value="" />时，
                全省高速公路<b>出口车流量</b><input type="text" id="Total_EX" name="Total_EX" value="" readonly>辆（客车<input type="text" id="CAR_EX" name="CAR_EX" value="" onblur="setCAR_EX()">辆、货车<input type="text" id="TRUCK_EX" name="TRUCK_EX" value="" onblur="setTRUCK_EX()">辆），
                同比<input type="text" id="YOY_UNKNOWN_EX" name="YOY_UNKNOWN_EX" value="" onblur="setYOY_UNKNOWN_EX()">（客车同比<input type="text" id="YOY_CAR_EX" name="YOY_CAR_EX" value="" onblur="setYOY_CAR_EX()">、货车同比<input type="text" id="YOY_TRUCK_EX" name="YOY_TRUCK_EX" value="" onblur="setYOY_TRUCK_EX()">），
                环比<input type="text" id="MOM_UNKNOWN_EX" name="MOM_UNKNOWN_EX" value="" onblur="setMOM_UNKNOWN_EX()">（客车环比<input type="text" id="MOM_CAR_EX" name="MOM_CAR_EX" value="" onblur="setMOM_CAR_EX()">、货车环比<input type="text" id="MOM_TRUCK_EX" name="MOM_TRUCK_EX" value="" onblur="setMOM_TRUCK_EX()">）；
                <b>入口车流量</b><input type="text" id="Total_EN" name="Total_EN" value="" readonly>辆（客车<input type="text" id="CAR_EN" name="CAR_EN" value="" onblur="setCAR_EN()">辆、货车<input type="text" id="TRUCK_EN" name="TRUCK_EN" value="" onblur="setTRUCK_EN()">辆），
                同比<input type="text" id="YOY_UNKNOWN_EN" name="YOY_UNKNOWN_EN" value="" onblur="setYOY_UNKNOWN_EN()">（客车同比<input type="text" id="YOY_CAR_EN" name="YOY_CAR_EN" value="" onblur="setYOY_CAR_EN()">、货车同比<input type="text" id="YOY_TRUCK_EN" name="YOY_TRUCK_EN" value="" onblur="setYOY_TRUCK_EN()">），
                环比<input type="text" id="MOM_UNKNOWN_EN" name="MOM_UNKNOWN_EN" value="" onblur="setMOM_UNKNOWN_EN()">（客车环比<input type="text" id="MOM_CAR_EN" name="MOM_CAR_EN" value="" onblur="setMOM_CAR_EN()">、货车环比<input type="text" id="MOM_TRUCK_EN" name="MOM_TRUCK_EN" value="" onblur="setMOM_TRUCK_EN()">）。
                <br>
                公司高速公路服务区车流量<input type="text" id="Total" name="Total" value="" readonly>辆（客车<input type="text" id="CARFLOW" name="CARFLOW" value="" onblur="setCARFLOW()">辆、货车<input type="text" id="TRUCKFLOW" name="TRUCKFLOW" value="" onblur="setTRUCKFLOW()">辆），
                客车环比<input type="text" id="MOM_CARFLOW" name="MOM_CARFLOW" value="" onblur="setMOM_CARFLOW()">、货车环比<input type="text" id="MOM_TRUCKFLOW" name="MOM_TRUCKFLOW" value="" onblur="setMOM_TRUCKFLOW()">；
                人流量<input type="text" id="PERSONFLOW" name="PERSONFLOW" value="" onblur="setPERSONFLOW()">人，环比<input type="text" id="MOM_PERSONFLOW" name="MOM_PERSONFLOW" value="" onblur="setMOM_PERSONFLOW()">。
            </p>
            <br>
            <p align="center"><font color="red"><span id="message">${msg}</span></font></p>
            <button type="submit" class="btn btn-primary mb-2" onclick="submitAjax()">提交</button>
        </div>
    </div>
</form>
</body>
</html>
