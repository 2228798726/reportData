var i=1;
function addFun() {
    var tables = $('#eventTable');

    var addtr = $('<tr class="row">'+
        '<td scope="col" class="col-sm-12 col-md-2"><input class="form-control" type="date" id="TOLLDATE"+"_"'+i + ' name="TOLLDATE" value="" /></td>'+
        '<td scope="col" class="col-sm-12 col-md-2">'+
        '<select class="form-control" id="TYPE"+"_"'+i + ' name="TYPE">'+
            '<option value="1">拥堵1小时</option>'+
            '<option value="2">拥堵1-2小时</option>'+
            '<option value="3">拥堵2小时以上</option>'+
        '</select></td>'+
    '<td scope="col" class="col-sm-12 col-md-2">'+
        '<input class="form-control" type="textarea" id="OWNERNAME"+"_"'+i + '  name="OWNERNAME" value="" />'+
        '</td>'+
        '<td scope="col" class="col-sm-12 col-md-5"><input class="form-control" type="textarea" id="CONTENT"+"_"'+i + ' name="CONTENT" value="" /></td>'+
        "<td class=\"col-md-1\">&nbsp;<button onclick=\"deleteTrRow(this)\" class=\"btn btn-primary mb-2\">删除</button></td>"+
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

function submitAjax() {
    if (check()==true){
        $("input[name='TOLLDATE']").each(
            function () {
                TOLLDATEList.push($(this).val())
            }
        );
        $("select[name='TYPE']").each(
            function () {
                alert($(this).val());
                TYPEList.push($(this).val())
            }
        );
        $("input[name='OWNERNAME']").each(
            function () {
                OWNERNAMEList.push($(this).val())
            }
        );

        $("input[name='CONTENT']").each(
            function () {
                CONTENTList.push($(this).val())
            }
        );
        for (var i=0;i<TOLLDATEList.length;i++){
            var tdWxDavenportRoadInfo={};
            var TOLLDATE= TOLLDATEList[i];
            var TYPE= TYPEList[i];
            var OWNERNAME= OWNERNAMEList[i];
            var CONTENT=CONTENTList[i];
            console.log("日期"+TOLLDATE);
            console.log("类型"+TYPE);
            console.log("部门"+OWNERNAME);
            console.log("内容"+CONTENT);
            tdWxDavenportRoadInfo[TOLLDATE]=TOLLDATE;
            tdWxDavenportRoadInfo[TYPE]=TYPE;
            tdWxDavenportRoadInfo[OWNERNAME]=OWNERNAME;
            tdWxDavenportRoadInfo[CONTENT]=CONTENT;
            tdWxDavenportRoadInfos.push(tdWxDavenportRoadInfo);
        }
        console.log("长度"+tdWxDavenportRoadInfos.length);
    }
}