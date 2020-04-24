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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
    <link rel="stylesheet" href="css/index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
<form action="${pageContext.request.contextPath}/report/event" method="post" onsubmit="return check()">
    <div class="table-responsive">
        <div class="container">
        <table class="table table-bordered">
        <thead class="text-center">
        <tr class="row">
            <th scope="col" class="col-sm-12 col-md-2" >日期</th>
            <th scope="col" class="col-sm-12 col-md-2" >事件类型</th>
            <th scope="col" class="col-sm-12 col-md-2" >管理处</th>
            <th scope="col" class="col-sm-12 col-md-6" >内容</th>
        </tr>
        </thead>
        <tbody>
        <tr  class="row">
            <td scope="col" class="col-sm-12 col-md-2"><input class="form-control" type="date" id="TOLLDATE" name="TOLLDATE" value="" /></td>
            <td scope="col" class="col-sm-12 col-md-2">
                <select class="form-control" id="TYPE" name="TYPE">
                <option value="1">拥堵1小时</option>
                <option value="2">拥堵1-2小时</option>
                <option value="3">拥堵2小时以上</option>
                </select></td>
            <td scope="col" class="col-sm-12 col-md-2">
                <input class="form-control" type="text" id="OWNERNAME"  name="OWNERNAME" value="" />
            </td>
            <td scope="col" class="col-sm-12 col-md-6"><input class="form-control" type="textarea" id="CONTENT" name="CONTENT" value="" /></td>
        </tr>
        <tr>
            <td scope="col" align="center" colspan="4">
                <p align="center"><font color="red"><span id="message">${msg}</span></font></p>
                <button type="submit" class="btn btn-primary mb-2">提交</button>
                <p align="center"><font color="blue"><span><a href="jsp/event.jsp">添加日常-流量</a></span></font></p>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
</form>
</body>
</html>
