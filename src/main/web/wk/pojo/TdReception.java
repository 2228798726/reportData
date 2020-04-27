package wk.pojo;

import java.util.Date;

public class TdReception {
    /**
     * 日期
     */
    private Date TOLLDATE;
    /**
     * 出口客车车流量
     */
    private  String CAR_EX;
    /**
     * 出口货车车流量
     */
    private  String TRUCK_EX;
    /**
     * 出口客车同比车流量
     */
    private  String YOY_CAR_EX;
    /**
     * 出口货车同比车流量
     */
    private  String YOY_TRUCK_EX;
    /**
     * 出口客车环比车流量
     */
    private  String MOM_CAR_EX;
    /**
     * 出口货车环比车流量
     */
    private  String MOM_TRUCK_EX;
    /**
     * 入口客车车流量
     */
    private  String CAR_EN;
    /**
     * 入口货车车流量
     */
    private  String TRUCK_EN;
    /**
     * 入口客车同比车流量
     */
    private  String YOY_CAR_EN;
    /**
     * 入口货车同比车流量
     */
    private  String YOY_TRUCK_EN;
    /**
     * 入口客车环比车流量
     */
    private  String MOM_CAR_EN;
    /**
     * 入口货车环比车流量
     */
    private  String MOM_TRUCK_EN;
    /**
     * 服务区人流量
     */
    private  String PERSONFLOW;
    /**
     * 服务区环比人流量
     */
    private  String MOM_PERSONFLOW;
    /**
     * 服务区客车流量
     */
    private  String CARFLOW;
    /**
     * 服务区货车流量
     */
    private  String TRUCKFLOW;
    /**
     * 服务区客车环比流量
     */
    private  String MOM_CARFLOW;
    /**
     * 服务区货车环比流量
     */
    private  String MOM_TRUCKFLOW;
    /**
     * 未知车型出口流量
     */
    private  String UNKNOWN_EX;
    /**
     * 未知车型入口流量
     */
    private  String UNKNOWN_EN;
    /**
     * 未知车型出口流量-同比
     */
    private  String YOY_UNKNOWN_EX;
    /**
     * 未知车型入口流量-同比
     */
    private  String YOY_UNKNOWN_EN;
    /**
     * 未知车型出口流量-环比
     */
    private  String MOM_UNKNOWN_EX;
    /**
     * 未知车型入口流量-环比
     */
    private  String MOM_UNKNOWN_EN;

    public Date getTOLLDATE() {
        return TOLLDATE;
    }

    public void setTOLLDATE(Date TOLLDATE) {
        this.TOLLDATE = TOLLDATE;
    }

    public String getCAR_EX() {
        return CAR_EX;
    }

    public void setCAR_EX(String CAR_EX) {
        this.CAR_EX = CAR_EX;
    }

    public String getTRUCK_EX() {
        return TRUCK_EX;
    }

    public void setTRUCK_EX(String TRUCK_EX) {
        this.TRUCK_EX = TRUCK_EX;
    }

    public String getYOY_CAR_EX() {
        return YOY_CAR_EX;
    }

    public void setYOY_CAR_EX(String YOY_CAR_EX) {
        this.YOY_CAR_EX = YOY_CAR_EX;
    }

    public String getYOY_TRUCK_EX() {
        return YOY_TRUCK_EX;
    }

    public void setYOY_TRUCK_EX(String YOY_TRUCK_EX) {
        this.YOY_TRUCK_EX = YOY_TRUCK_EX;
    }

    public String getMOM_CAR_EX() {
        return MOM_CAR_EX;
    }

    public void setMOM_CAR_EX(String MOM_CAR_EX) {
        this.MOM_CAR_EX = MOM_CAR_EX;
    }

    public String getMOM_TRUCK_EX() {
        return MOM_TRUCK_EX;
    }

    public void setMOM_TRUCK_EX(String MOM_TRUCK_EX) {
        this.MOM_TRUCK_EX = MOM_TRUCK_EX;
    }

    public String getCAR_EN() {
        return CAR_EN;
    }

    public void setCAR_EN(String CAR_EN) {
        this.CAR_EN = CAR_EN;
    }

    public String getTRUCK_EN() {
        return TRUCK_EN;
    }

    public void setTRUCK_EN(String TRUCK_EN) {
        this.TRUCK_EN = TRUCK_EN;
    }

    public String getYOY_CAR_EN() {
        return YOY_CAR_EN;
    }

    public void setYOY_CAR_EN(String YOY_CAR_EN) {
        this.YOY_CAR_EN = YOY_CAR_EN;
    }

    public String getYOY_TRUCK_EN() {
        return YOY_TRUCK_EN;
    }

    public void setYOY_TRUCK_EN(String YOY_TRUCK_EN) {
        this.YOY_TRUCK_EN = YOY_TRUCK_EN;
    }

    public String getMOM_CAR_EN() {
        return MOM_CAR_EN;
    }

    public void setMOM_CAR_EN(String MOM_CAR_EN) {
        this.MOM_CAR_EN = MOM_CAR_EN;
    }

    public String getMOM_TRUCK_EN() {
        return MOM_TRUCK_EN;
    }

    public void setMOM_TRUCK_EN(String MOM_TRUCK_EN) {
        this.MOM_TRUCK_EN = MOM_TRUCK_EN;
    }

    public String getPERSONFLOW() {
        return PERSONFLOW;
    }

    public void setPERSONFLOW(String PERSONFLOW) {
        this.PERSONFLOW = PERSONFLOW;
    }

    public String getMOM_PERSONFLOW() {
        return MOM_PERSONFLOW;
    }

    public void setMOM_PERSONFLOW(String MOM_PERSONFLOW) {
        this.MOM_PERSONFLOW = MOM_PERSONFLOW;
    }

    public String getCARFLOW() {
        return CARFLOW;
    }

    public void setCARFLOW(String CARFLOW) {
        this.CARFLOW = CARFLOW;
    }

    public String getTRUCKFLOW() {
        return TRUCKFLOW;
    }

    public void setTRUCKFLOW(String TRUCKFLOW) {
        this.TRUCKFLOW = TRUCKFLOW;
    }

    public String getMOM_CARFLOW() {
        return MOM_CARFLOW;
    }

    public void setMOM_CARFLOW(String MOM_CARFLOW) {
        this.MOM_CARFLOW = MOM_CARFLOW;
    }

    public String getMOM_TRUCKFLOW() {
        return MOM_TRUCKFLOW;
    }

    public void setMOM_TRUCKFLOW(String MOM_TRUCKFLOW) {
        this.MOM_TRUCKFLOW = MOM_TRUCKFLOW;
    }

    public String getUNKNOWN_EX() {
        return UNKNOWN_EX;
    }

    public void setUNKNOWN_EX(String UNKNOWN_EX) {
        this.UNKNOWN_EX = UNKNOWN_EX;
    }

    public String getUNKNOWN_EN() {
        return UNKNOWN_EN;
    }

    public void setUNKNOWN_EN(String UNKNOWN_EN) {
        this.UNKNOWN_EN = UNKNOWN_EN;
    }

    public String getYOY_UNKNOWN_EX() {
        return YOY_UNKNOWN_EX;
    }

    public void setYOY_UNKNOWN_EX(String YOY_UNKNOWN_EX) {
        this.YOY_UNKNOWN_EX = YOY_UNKNOWN_EX;
    }

    public String getYOY_UNKNOWN_EN() {
        return YOY_UNKNOWN_EN;
    }

    public void setYOY_UNKNOWN_EN(String YOY_UNKNOWN_EN) {
        this.YOY_UNKNOWN_EN = YOY_UNKNOWN_EN;
    }

    public String getMOM_UNKNOWN_EX() {
        return MOM_UNKNOWN_EX;
    }

    public void setMOM_UNKNOWN_EX(String MOM_UNKNOWN_EX) {
        this.MOM_UNKNOWN_EX = MOM_UNKNOWN_EX;
    }

    public String getMOM_UNKNOWN_EN() {
        return MOM_UNKNOWN_EN;
    }

    public void setMOM_UNKNOWN_EN(String MOM_UNKNOWN_EN) {
        this.MOM_UNKNOWN_EN = MOM_UNKNOWN_EN;
    }
}
