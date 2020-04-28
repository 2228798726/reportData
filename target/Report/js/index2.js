var i=1;
function addFun() {
    var tables = $('#eventTable');

    var addtr = $('<tr class="row">'+
        '<td scope="col" class="col-sm-2 col-md-2">'+
        '<select class="form-control" id="TYPE"+"_"'+i + ' name="TYPE">'+
            '<option value="1">拥堵1小时</option>'+
            '<option value="2">拥堵1-2小时</option>'+
            '<option value="3">拥堵2小时以上</option>'+
        '</select></td>'+
    '<td scope="col" class="col-sm-2 col-md-2">'+
        '<select class="form-control" id="OWNERNAME"+"_"'+i + ' name="OWNERNAME">'+
        '<option value="昆西">昆西 </option>'+
        '<option value="昆东">昆东 </option>'+
        '<option value="大理">大理 </option>'+
        '<option value="昭通">昭通 </option>'+
        '<option value="普洱">普洱 </option>'+
        '<option value="文山">文山 </option>'+
        '<option value="红河">红河 </option>'+
        '<option value="保山">保山 </option>'+
        '<option value="曲靖">曲靖 </option>'+
        '</select>'+
        '</td>'+
        '<td scope="col" class="col-sm-7 col-md-7"><input class="form-control" type="textarea" id="CONTENT"+"_"'+i + ' name="CONTENT" value="" /></td>'+
        "<td class=\"col-md-1 col-sm-1\">&nbsp;<button onclick=\"deleteTrRow(this)\" class=\"btn btn-primary mb-2\">删除</button></td>"+
        "</tr>");
    addtr.appendTo(tables);
    i=i+1;
}
function deleteTrRow(tr){
    //多一个parent就代表向前一个标签,
    //本删除范围为<td><tr>两个标签,即向前两个parent
    //如果多一个parent就会删除整个table
    $(tr).parent().parent().remove();
}

var tdWxDavenportRoadInfos=new Array();
var TOLLDATEList=[];
var OWNERNAMEList=[];
var TYPEList=[];
var CONTENTList=[];
var tdReception={};
var tdObject={};

function submitAjax() {
    if (check()==true){
        $("select[name='TYPE']").each(
            function () {
                TYPEList.push($(this).val())
            }
        );
        $("select[name='OWNERNAME']").each(
            function () {
                OWNERNAMEList.push($(this).val())
            }
        );

        $("input[name='CONTENT']").each(
            function () {
                CONTENTList.push($(this).val())
            }
        );
        for (var i=0;i<TYPEList.length;i++){
            var tdWxDavenportRoadInfo={};
            var TYPE= TYPEList[i];
            var OWNERNAME= OWNERNAMEList[i];
            var CONTENT=CONTENTList[i];

            tdWxDavenportRoadInfo["TOLLDATE"]=$("#TOLLDATE_Daily").val();
            tdWxDavenportRoadInfo["TYPE"]=TYPE;
            tdWxDavenportRoadInfo["OWNERNAME"]=OWNERNAME;
            tdWxDavenportRoadInfo["CONTENT"]=CONTENT;
            tdWxDavenportRoadInfos.push(tdWxDavenportRoadInfo);
        }

        tdReception["TOLLDATE"]=$("#TOLLDATE_Daily").val();
        tdReception["CAR_EX"]=$("#CAR_EX").val();
        tdReception["TRUCK_EX"]=$("#TRUCK_EX").val();
        tdReception["YOY_CAR_EX"]=$("#YOY_CAR_EX").val();
        tdReception["YOY_TRUCK_EX"]=$("#YOY_TRUCK_EX").val();
        tdReception["MOM_CAR_EX"]=$("#MOM_CAR_EX").val();
        tdReception["MOM_TRUCK_EX"]=$("#MOM_TRUCK_EX").val();
        tdReception["CAR_EN"]=$("#CAR_EN").val();
        tdReception["TRUCK_EN"]=$("#TRUCK_EN").val();
        tdReception["YOY_CAR_EN"]=$("#YOY_CAR_EN").val();
        tdReception["YOY_TRUCK_EN"]=$("#YOY_TRUCK_EN").val();
        tdReception["MOM_CAR_EN"]=$("#MOM_CAR_EN").val();
        tdReception["MOM_TRUCK_EN"]=$("#MOM_TRUCK_EN").val();
        tdReception["PERSONFLOW"]=$("#PERSONFLOW").val();
        tdReception["MOM_PERSONFLOW"]=$("#MOM_PERSONFLOW").val();
        tdReception["CARFLOW"]=$("#CARFLOW").val();
        tdReception["TRUCKFLOW"]=$("#TRUCKFLOW").val();
        tdReception["MOM_CARFLOW"]=$("#MOM_CARFLOW").val();
        tdReception["MOM_TRUCKFLOW"]=$("#MOM_TRUCKFLOW").val();
        tdReception["YOY_UNKNOWN_EX"]=$("#YOY_UNKNOWN_EX").val();
        tdReception["YOY_UNKNOWN_EN"]=$("#YOY_UNKNOWN_EN").val();
        tdReception["MOM_UNKNOWN_EX"]=$("#MOM_UNKNOWN_EX").val();
        tdReception["MOM_UNKNOWN_EN"]=$("#MOM_UNKNOWN_EN").val();

        tdObject["tdWxDavenportRoadInfos"]=tdWxDavenportRoadInfos;
        tdObject["tdReception"]=tdReception;

        $.ajax({
            type:"post",
            url: "http://localhost:8080/Report_war/report/event_multi",
            contentType: "application/json;charset=utf-8",
            dataType:"json",
            async:false,
            data: JSON.stringify(tdObject),
            success:function (message) {
                alert(JSON.stringify(message));
            },
            error:function (message) {
                alert("提交失败"+JSON.stringify(message));
            }
        });


    }
}