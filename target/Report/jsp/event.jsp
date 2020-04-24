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
            <table class="table">
                <tbody>
                <tr>
                    <td rowspan="3">
                        日期
                    </td>
                    <td colspan="6">
                        出口车流量
                    </td>
                    <td colspan="6">
                        入口车流量
                    </td>
                    <td colspan="6">
                        服务区
                    </td>
                    <td colspan="3">
                        出口未知车型
                    </td>
                    <td colspan="3">
                        入口未知车型
                    </td>
                </tr>
                <tr>
                    <td colspan="2">当日</td>
                    <td colspan="2">同比</td>
                    <td colspan="2">环比</td>
                    <td colspan="2">当日</td>
                    <td colspan="2">同比</td>
                    <td colspan="2">环比</td>
                    <td colspan="3">当日</td>
                    <td colspan="3">环比</td>
                    <td colspan="1">当日</td>
                    <td colspan="1">同比</td>
                    <td colspan="1">环比</td>
                    <td colspan="1">当日</td>
                    <td colspan="1">同比</td>
                    <td colspan="1">环比</td>
                </tr>
                <tr>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>客车车流量</td>
                    <td>货车车流量</td>
                    <td>人流量</td>
                    <td>客车流量</td>
                    <td>货车流量</td>
                    <td>人流量</td>
                    <td>客车流量</td>
                    <td>货车流量</td>
                    <td>车流量</td>
                    <td>车流量</td>
                    <td>车流量</td>
                    <td>车流量</td>
                    <td>车流量</td>
                    <td>车流量</td>
                </tr>
                <tr>
                    <td>
                        <input type="date" id="TOLLDATE" name="TOLLDATE" value="" />
                    </td>
                    <td><input type="number" id="CAR_EX" name="CAR_EX" value=""></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</form>
</body>
</html>
