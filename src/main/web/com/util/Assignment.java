package com.util;

import wk.pojo.TdObiect;
import wk.pojo.TdReception;
import wk.pojo.TdWxDailyReport;

/**
 * @author 李沛然
 */
public class Assignment {

    public static TdWxDailyReport assigmentTdWxDailyReport(TdReception tdReception){
        TdWxDailyReport tdWxDailyReport=new TdWxDailyReport();
        //设置ID
        tdWxDailyReport.setID(GUIDUtil.getGUID());
        tdWxDailyReport.setTOLLDATE(tdReception.getTOLLDATE());
        //设置出口信息
        tdWxDailyReport.setCAR_EX(Integer.parseInt(tdReception.getCAR_EX()));
        tdWxDailyReport.setTRUCK_EX(Integer.parseInt(tdReception.getTRUCK_EX()));
        tdWxDailyReport.setYOY_CAR_EX(Calculate.calculateFlow(tdReception.getCAR_EX(),tdReception.getYOY_CAR_EX()));
        tdWxDailyReport.setYOY_TRUCK_EX(Calculate.calculateFlow(tdReception.getTRUCK_EX(),tdReception.getYOY_TRUCK_EX()));
        tdWxDailyReport.setMOM_CAR_EX(Calculate.calculateFlow(tdReception.getCAR_EX(),tdReception.getMOM_CAR_EX()));
        tdWxDailyReport.setMOM_TRUCK_EX(Calculate.calculateFlow(tdReception.getTRUCK_EX(),tdReception.getMOM_TRUCK_EX()));

        //设置入口信息
        tdWxDailyReport.setCAR_EN(Integer.parseInt(tdReception.getCAR_EN()));
        tdWxDailyReport.setTRUCK_EN(Integer.parseInt(tdReception.getTRUCK_EN()));
        tdWxDailyReport.setYOY_CAR_EN(Calculate.calculateFlow(tdReception.getCAR_EN(),tdReception.getYOY_CAR_EN()));
        tdWxDailyReport.setYOY_TRUCK_EN(Calculate.calculateFlow(tdReception.getTRUCK_EN(),tdReception.getYOY_TRUCK_EN()));
        tdWxDailyReport.setMOM_CAR_EN(Calculate.calculateFlow(tdReception.getCAR_EN(),tdReception.getMOM_CAR_EN()));
        tdWxDailyReport.setMOM_TRUCK_EN(Calculate.calculateFlow(tdReception.getTRUCK_EN(),tdReception.getMOM_TRUCK_EN()));

        //设置服务区信息
        tdWxDailyReport.setPERSONFLOW(Integer.parseInt(tdReception.getPERSONFLOW()));
        tdWxDailyReport.setCARFLOW(Integer.parseInt(tdReception.getCARFLOW()));
        tdWxDailyReport.setTRUCKFLOW(Integer.parseInt(tdReception.getTRUCKFLOW()));
        tdWxDailyReport.setMOM_PERSONFLOW(Calculate.calculateFlow(tdReception.getPERSONFLOW(),tdReception.getMOM_PERSONFLOW()));
        tdWxDailyReport.setMOM_CARFLOW(Calculate.calculateFlow(tdReception.getCARFLOW(),tdReception.getMOM_CARFLOW()));
        tdWxDailyReport.setMOM_TRUCKFLOW(Calculate.calculateFlow(tdReception.getTRUCKFLOW(),tdReception.getMOM_TRUCKFLOW()));

        //设置出口未知车型
        tdWxDailyReport.setUNKNOWN_EX(0);
        tdWxDailyReport.setUNKNOWN_EN(0);
        tdWxDailyReport.setYOY_UNKNOWN_EX((int) ((tdWxDailyReport.getUNKNOWN_EX()+tdWxDailyReport.getCAR_EX()+tdWxDailyReport.getTRUCK_EX()
                        -tdWxDailyReport.getYOY_CAR_EX()-tdWxDailyReport.getYOY_TRUCK_EX()-
                        Calculate.transNumber(tdReception.getYOY_UNKNOWN_EX())*(tdWxDailyReport.getYOY_CAR_EX()+tdWxDailyReport.getYOY_TRUCK_EX()))
                        /(1+ Calculate.transNumber(tdReception.getYOY_UNKNOWN_EX()))));
        tdWxDailyReport.setMOM_UNKNOWN_EX((int) ((tdWxDailyReport.getUNKNOWN_EX()+tdWxDailyReport.getCAR_EX()+tdWxDailyReport.getTRUCK_EX()
                -tdWxDailyReport.getMOM_CAR_EX()-tdWxDailyReport.getMOM_TRUCK_EX()-
                Calculate.transNumber(tdReception.getMOM_UNKNOWN_EX())*(tdWxDailyReport.getMOM_CAR_EX()+tdWxDailyReport.getMOM_TRUCK_EX()))
                        /(1+ Calculate.transNumber(tdReception.getMOM_UNKNOWN_EX()))));
        tdWxDailyReport.setYOY_UNKNOWN_EN((int) ((tdWxDailyReport.getUNKNOWN_EN()+tdWxDailyReport.getCAR_EN()+tdWxDailyReport.getTRUCK_EN()
                -tdWxDailyReport.getYOY_CAR_EN()-tdWxDailyReport.getYOY_TRUCK_EN()-
                Calculate.transNumber(tdReception.getYOY_UNKNOWN_EN())*(tdWxDailyReport.getYOY_CAR_EN()+tdWxDailyReport.getYOY_TRUCK_EN()))
                        /(1+ Calculate.transNumber(tdReception.getYOY_UNKNOWN_EN()))));
        tdWxDailyReport.setMOM_UNKNOWN_EN((int) ((tdWxDailyReport.getUNKNOWN_EN()+tdWxDailyReport.getCAR_EN()+tdWxDailyReport.getTRUCK_EN()
                -tdWxDailyReport.getMOM_CAR_EN()-tdWxDailyReport.getMOM_TRUCK_EN()-
                Calculate.transNumber(tdReception.getMOM_UNKNOWN_EN())*(tdWxDailyReport.getMOM_CAR_EN()+tdWxDailyReport.getMOM_TRUCK_EN()))
                        /(1+ Calculate.transNumber(tdReception.getMOM_UNKNOWN_EN()))));

        return tdWxDailyReport;
    }
}
