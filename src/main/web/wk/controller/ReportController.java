package wk.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.mchange.v2.c3p0.stmt.GooGooStatementCache;
import com.result.ResultEntity;
import com.util.Assignment;
import com.util.GUIDUtil;
import com.util.MessageConstatnt;
import com.util.ResourcesUtil;
import oracle.jdbc.oracore.TDSPatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.*;
import wk.pojo.TdObiect;
import wk.pojo.TdWxDailyReport;
import wk.pojo.TdWxDavenportRoadInfo;
import wk.serviceImpl.TdWxDailyReportServiceImpl;
import wk.serviceImpl.TdWxDavenportRoadInfoServiceImpl;


import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author 李沛然
 */
@Controller
@RequestMapping("/report")
public class ReportController {
    /**
     * 日报-事件
     */
    @Autowired
    TdWxDavenportRoadInfoServiceImpl tdWxDavenportRoadInfoService;
    @Autowired
    TdWxDailyReportServiceImpl tdWxDailyReportService;
    @Resource
    private PlatformTransactionManager transactionManager;


    /**
     * 日报事件请求路径
     * @param TOLLDATE
     * @param TYPE
     * @param OWNERNAME
     * @param CONTENT
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/event",method = RequestMethod.POST)
    public ResultEntity<Object> insert(@RequestParam("TOLLDATE") String TOLLDATE,@RequestParam("TYPE") Integer TYPE,
                                       @RequestParam("OWNERNAME") String OWNERNAME,@RequestParam("CONTENT") String CONTENT){
        //创建事件对象，用于接收参数
        TdWxDavenportRoadInfo tdWxDavenportRoadInfo= new TdWxDavenportRoadInfo();
        //创建DATE对象，以便于将传过来字符串转变为date类型的数据
        Date today =new Date();
        try {
            today=new SimpleDateFormat("yyyy-MM-dd").parse(TOLLDATE);
        }catch (Exception e){
            e.printStackTrace();
        }
        tdWxDavenportRoadInfo.setID(GUIDUtil.getGUID());
        tdWxDavenportRoadInfo.setTOLLDATE(today);
        tdWxDavenportRoadInfo.setTYPE(TYPE);
        tdWxDavenportRoadInfo.setOWNERNAME(OWNERNAME);
        tdWxDavenportRoadInfo.setCONTENT(CONTENT);
        try {
            //如果插入数据成功，则返回状态码0，成功
            if (tdWxDavenportRoadInfoService.insert(tdWxDavenportRoadInfo) != 0) {
                return ResultEntity.createSuccessResult(null);
            } else {
                //失败返回上传失败，状态码为1001
                return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
            }
        }catch (Exception e){
            e.printStackTrace();
            //失败返回上传失败，状态码为1001
            return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
        }
    }

    /**
     * 日报-车流请求路径
     * @param TOLLDATE
     * @param CAR_EX
     * @param TRUCK_EX
     * @param YOY_CAR_EX
     * @param YOY_TRUCK_EX
     * @param MOM_CAR_EX
     * @param MOM_TRUCK_EX
     * @param CAR_EN
     * @param TRUCK_EN
     * @param YOY_CAR_EN
     * @param YOY_TRUCK_EN
     * @param MOM_CAR_EN
     * @param MOM_TRUCK_EN
     * @param PERSONFLOW
     * @param MOM_PERSONFLOW
     * @param CARFLOW
     * @param TRUCKFLOW
     * @param MOM_CARFLOW
     * @param MOM_TRUCKFLOW
     * @param UNKNOWN_EX
     * @param UNKNOWN_EN
     * @param YOY_UNKNOWN_EX
     * @param YOY_UNKNOWN_EN
     * @param MOM_UNKNOWN_EX
     * @param MOM_UNKNOWN_EN
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/daily",method = RequestMethod.POST)
    public  ResultEntity<Object> insert(@RequestParam("TOLLDATE") String TOLLDATE,@RequestParam("CAR_EX") Integer CAR_EX, @RequestParam("TRUCK_EX") Integer TRUCK_EX,@RequestParam("YOY_CAR_EX") Integer YOY_CAR_EX, @RequestParam("YOY_TRUCK_EX") Integer YOY_TRUCK_EX,@RequestParam("MOM_CAR_EX") Integer MOM_CAR_EX,
                                        @RequestParam("MOM_TRUCK_EX") Integer MOM_TRUCK_EX,@RequestParam("CAR_EN") Integer CAR_EN, @RequestParam("TRUCK_EN") Integer TRUCK_EN,@RequestParam("YOY_CAR_EN") Integer YOY_CAR_EN, @RequestParam("YOY_TRUCK_EN") Integer YOY_TRUCK_EN,@RequestParam("MOM_CAR_EN") Integer MOM_CAR_EN, @RequestParam("MOM_TRUCK_EN") Integer MOM_TRUCK_EN,@RequestParam("PERSONFLOW") Integer PERSONFLOW,
                                        @RequestParam("MOM_PERSONFLOW") Integer MOM_PERSONFLOW,@RequestParam("CARFLOW") Integer CARFLOW, @RequestParam("TRUCKFLOW") Integer TRUCKFLOW,@RequestParam("MOM_CARFLOW") Integer MOM_CARFLOW, @RequestParam("MOM_TRUCKFLOW") Integer MOM_TRUCKFLOW,@RequestParam("UNKNOWN_EX") Integer UNKNOWN_EX, @RequestParam("UNKNOWN_EN") Integer UNKNOWN_EN,@RequestParam("YOY_UNKNOWN_EX") Integer YOY_UNKNOWN_EX,
                                        @RequestParam("YOY_UNKNOWN_EN") Integer YOY_UNKNOWN_EN,@RequestParam("MOM_UNKNOWN_EX") Integer MOM_UNKNOWN_EX, @RequestParam("MOM_UNKNOWN_EN") Integer MOM_UNKNOWN_EN
                                        ){
        //创建车流对象，用于接收参数
        TdWxDailyReport tdWxDailyReport =new TdWxDailyReport();
        Date today =new Date();
        try {
            today=new SimpleDateFormat("yyyy-MM-dd").parse(TOLLDATE);
        }catch (Exception e){
            e.printStackTrace();
        }
        tdWxDailyReport.setID(GUIDUtil.getGUID());
        tdWxDailyReport.setTOLLDATE(today);
        tdWxDailyReport.setCAR_EN(CAR_EN);
        tdWxDailyReport.setCARFLOW(CARFLOW);
        tdWxDailyReport.setCAR_EX(CAR_EX);
        tdWxDailyReport.setMOM_CAR_EN(MOM_CAR_EN);
        tdWxDailyReport.setMOM_CAR_EX(MOM_CAR_EX);
        tdWxDailyReport.setMOM_CARFLOW(MOM_CARFLOW);
        tdWxDailyReport.setMOM_PERSONFLOW(MOM_PERSONFLOW);
        tdWxDailyReport.setMOM_TRUCK_EN(MOM_TRUCK_EN);
        tdWxDailyReport.setMOM_TRUCK_EX(MOM_TRUCK_EX);
        tdWxDailyReport.setMOM_TRUCKFLOW(MOM_TRUCKFLOW);
        tdWxDailyReport.setMOM_UNKNOWN_EN(MOM_UNKNOWN_EN);
        tdWxDailyReport.setMOM_UNKNOWN_EX(MOM_UNKNOWN_EX);
        tdWxDailyReport.setPERSONFLOW(PERSONFLOW);
        tdWxDailyReport.setTRUCK_EN(TRUCK_EN);
        tdWxDailyReport.setTRUCK_EX(TRUCK_EX);
        tdWxDailyReport.setTRUCKFLOW(TRUCKFLOW);
        tdWxDailyReport.setUNKNOWN_EN(UNKNOWN_EN);
        tdWxDailyReport.setUNKNOWN_EX(UNKNOWN_EX);
        tdWxDailyReport.setYOY_CAR_EN(YOY_CAR_EN);
        tdWxDailyReport.setYOY_CAR_EX(YOY_CAR_EX);
        tdWxDailyReport.setYOY_TRUCK_EN(YOY_TRUCK_EN);
        tdWxDailyReport.setYOY_TRUCK_EX(YOY_TRUCK_EX);
        tdWxDailyReport.setYOY_UNKNOWN_EN(YOY_UNKNOWN_EN);
        tdWxDailyReport.setYOY_UNKNOWN_EX(YOY_UNKNOWN_EX);

        try {
            //如果插入数据成功，则返回状态码0，成功
            if (tdWxDailyReportService.insert(tdWxDailyReport) != 0) {
                return ResultEntity.createSuccessResult(null);
            } else {
                //失败返回上传失败，状态码为1001
                return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
            }
        }catch (Exception e){
            e.printStackTrace();
            //失败返回上传失败，状态码为1001
            return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
        }
    }


    /**
     * 批量添加日报-事件
     * @param tdWxDavenportRoadInfoList
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/event_multi",method = RequestMethod.POST)
    public ResultEntity<Object> insertMultiEvents(@RequestBody String tdWxDavenportRoadInfoList){
        DefaultTransactionDefinition defaultTransactionDefinition = new DefaultTransactionDefinition();
        defaultTransactionDefinition.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
        TransactionStatus status = transactionManager.getTransaction(defaultTransactionDefinition);

        Gson gson=new Gson();
        TdObiect tdObiect =gson.fromJson(tdWxDavenportRoadInfoList,TdObiect.class);
        if(tdObiect.getTdWxDavenportRoadInfos().size()!=0){
            System.out.println("事件不为空！");
            for (TdWxDavenportRoadInfo tdWxDavenportRoadInfo:tdObiect.getTdWxDavenportRoadInfos()){
                //设置ID
                tdWxDavenportRoadInfo.setID(GUIDUtil.getGUID());
                tdWxDavenportRoadInfo.setTOLLDATE(tdWxDavenportRoadInfo.getTOLLDATE());
            }
            TdWxDailyReport tdWxDailyReport= Assignment.assigmentTdWxDailyReport(tdObiect.getTdReception());
            try {
                //如果插入数据成功，则返回状态码0，成功
                if (tdWxDavenportRoadInfoService.insertMulti(tdObiect.getTdWxDavenportRoadInfos()) != 0&&
                        tdWxDailyReportService.insert(tdWxDailyReport)!=0) {
                    transactionManager.commit(status);
                    return ResultEntity.createSuccessResult(null);
                } else {
                    //失败返回上传失败，状态码为1001
                    transactionManager.rollback(status);
                    return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
                }
            }catch (Exception e){
                transactionManager.rollback(status);
                e.printStackTrace();
                //失败返回上传失败，状态码为1001
                return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
            }
        }else {
            System.out.println("事件为空！");
            try {
                TdWxDailyReport tdWxDailyReport= Assignment.assigmentTdWxDailyReport(tdObiect.getTdReception());
                //如果插入数据成功，则返回状态码0，成功
                if (tdWxDailyReportService.insert(tdWxDailyReport)!=0) {
                    transactionManager.commit(status);
                    return ResultEntity.createSuccessResult(null);
                } else {
                    //失败返回上传失败，状态码为1001
                    transactionManager.rollback(status);
                    return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
                }
            }catch (Exception e){
                e.printStackTrace();
                transactionManager.rollback(status);
                //失败返回上传失败，状态码为1001
                return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
            }
        }

    }

    /**
     * 批量添加日报-流量
     * @param tdWxDailyReportList
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/daily_multi",method = RequestMethod.POST)
    public ResultEntity<Object> insertMulti_daily(@RequestBody String tdWxDailyReportList){
        List<TdWxDailyReport> tdWxDailyReports=new GsonBuilder().create().fromJson(tdWxDailyReportList,new TypeToken<List<TdWxDavenportRoadInfo>>() {}.getType());

        for (TdWxDailyReport tdWxDailyReport:tdWxDailyReports) {
            //设置ID
            tdWxDailyReport.setID(GUIDUtil.getGUID());
            tdWxDailyReport.setTOLLDATE(tdWxDailyReport.getTOLLDATE());
        }
        try {
            //如果插入数据成功，则返回状态码0，成功
            if (tdWxDailyReportService.insertMulti(tdWxDailyReports) != 0) {
                return ResultEntity.createSuccessResult(null);
            } else {
                //失败返回上传失败，状态码为1001
                return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
            }
        }catch (Exception e){
            e.printStackTrace();
            //失败返回上传失败，状态码为1001
            return ResultEntity.createFailResult(MessageConstatnt.UPLOAD_FAIL);
        }
    }
}

