package wk.pojo;

import java.util.Date;

/**
 * @author 李沛然
 */
public class TdWxDailyReport {
    /**
     *  编号
     */
    private  String ID;
    /**
     * 日期
     */
    private Date TOLLDATE;
    /**
     * 出口客车车流量
     */
    private  Integer CAR_EX;
    /**
     * 出口货车车流量
     */
    private  Integer TRUCK_EX;
    /**
     * 出口客车同比车流量
     */
    private  Integer YOY_CAR_EX;
    /**
     * 出口货车同比车流量
     */
    private  Integer YOY_TRUCK_EX;
    /**
     * 出口客车环比车流量
     */
    private  Integer MOM_CAR_EX;
    /**
     * 出口货车环比车流量
     */
    private  Integer MOM_TRUCK_EX;
    /**
     * 入口客车车流量
     */
    private  Integer CAR_EN;
    /**
     * 入口货车车流量
     */
    private  Integer TRUCK_EN;
    /**
     * 入口客车同比车流量
     */
    private  Integer YOY_CAR_EN;
    /**
     * 入口货车同比车流量
     */
    private  Integer YOY_TRUCK_EN;
    /**
     * 入口客车环比车流量
     */
    private  Integer MOM_CAR_EN;
    /**
     * 入口货车环比车流量
     */
    private  Integer MOM_TRUCK_EN;
    /**
     * 服务区人流量
     */
    private  Integer PERSONFLOW;
    /**
     * 服务区环比人流量
     */
    private  Integer MOM_PERSONFLOW;
    /**
     * 服务区客车流量
     */
    private  Integer CARFLOW;
    /**
     * 服务区货车流量
     */
    private  Integer TRUCKFLOW;
    /**
     * 服务区客车环比流量
     */
    private  Integer MOM_CARFLOW;
    /**
     * 服务区货车环比流量
     */
    private  Integer MOM_TRUCKFLOW;
    /**
     * 未知车型出口流量
     */
    private  Integer UNKNOWN_EX;
    /**
     * 未知车型入口流量
     */
    private  Integer UNKNOWN_EN;
    /**
     * 未知车型出口流量-同比
     */
    private  Integer YOY_UNKNOWN_EX;
    /**
     * 未知车型入口流量-同比
     */
    private  Integer YOY_UNKNOWN_EN;
    /**
     * 未知车型出口流量-环比
     */
    private  Integer MOM_UNKNOWN_EX;
    /**
     * 未知车型入口流量-环比
     */
    private  Integer MOM_UNKNOWN_EN;

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public Date getTOLLDATE() {
        return TOLLDATE;
    }

    public void setTOLLDATE(Date TOLLDATE) {
        java.sql.Date sqlDate = new java.sql.Date(TOLLDATE.getTime());
        this.TOLLDATE = sqlDate;
    }

    public Integer getCAR_EX() {
        return CAR_EX;
    }

    public void setCAR_EX(Integer CAR_EX) {
        this.CAR_EX = CAR_EX;
    }

    public Integer getTRUCK_EX() {
        return TRUCK_EX;
    }

    public void setTRUCK_EX(Integer TRUCK_EX) {
        this.TRUCK_EX = TRUCK_EX;
    }

    public Integer getYOY_CAR_EX() {
        return YOY_CAR_EX;
    }

    public void setYOY_CAR_EX(Integer YOY_CAR_EX) {
        this.YOY_CAR_EX = YOY_CAR_EX;
    }

    public Integer getYOY_TRUCK_EX() {
        return YOY_TRUCK_EX;
    }

    public void setYOY_TRUCK_EX(Integer YOY_TRUCK_EX) {
        this.YOY_TRUCK_EX = YOY_TRUCK_EX;
    }

    public Integer getMOM_CAR_EX() {
        return MOM_CAR_EX;
    }

    public void setMOM_CAR_EX(Integer MOM_CAR_EX) {
        this.MOM_CAR_EX = MOM_CAR_EX;
    }

    public Integer getMOM_TRUCK_EX() {
        return MOM_TRUCK_EX;
    }

    public void setMOM_TRUCK_EX(Integer MOM_TRUCK_EX) {
        this.MOM_TRUCK_EX = MOM_TRUCK_EX;
    }

    public Integer getCAR_EN() {
        return CAR_EN;
    }

    public void setCAR_EN(Integer CAR_EN) {
        this.CAR_EN = CAR_EN;
    }

    public Integer getTRUCK_EN() {
        return TRUCK_EN;
    }

    public void setTRUCK_EN(Integer TRUCK_EN) {
        this.TRUCK_EN = TRUCK_EN;
    }

    public Integer getYOY_CAR_EN() {
        return YOY_CAR_EN;
    }

    public void setYOY_CAR_EN(Integer YOY_CAR_EN) {
        this.YOY_CAR_EN = YOY_CAR_EN;
    }

    public Integer getYOY_TRUCK_EN() {
        return YOY_TRUCK_EN;
    }

    public void setYOY_TRUCK_EN(Integer YOY_TRUCK_EN) {
        this.YOY_TRUCK_EN = YOY_TRUCK_EN;
    }

    public Integer getMOM_CAR_EN() {
        return MOM_CAR_EN;
    }

    public void setMOM_CAR_EN(Integer MOM_CAR_EN) {
        this.MOM_CAR_EN = MOM_CAR_EN;
    }

    public Integer getMOM_TRUCK_EN() {
        return MOM_TRUCK_EN;
    }

    public void setMOM_TRUCK_EN(Integer MOM_TRUCK_EN) {
        this.MOM_TRUCK_EN = MOM_TRUCK_EN;
    }

    public Integer getPERSONFLOW() {
        return PERSONFLOW;
    }

    public void setPERSONFLOW(Integer PERSONFLOW) {
        this.PERSONFLOW = PERSONFLOW;
    }

    public Integer getMOM_PERSONFLOW() {
        return MOM_PERSONFLOW;
    }

    public void setMOM_PERSONFLOW(Integer MOM_PERSONFLOW) {
        this.MOM_PERSONFLOW = MOM_PERSONFLOW;
    }

    public Integer getCARFLOW() {
        return CARFLOW;
    }

    public void setCARFLOW(Integer CARFLOW) {
        this.CARFLOW = CARFLOW;
    }

    public Integer getTRUCKFLOW() {
        return TRUCKFLOW;
    }

    public void setTRUCKFLOW(Integer TRUCKFLOW) {
        this.TRUCKFLOW = TRUCKFLOW;
    }

    public Integer getMOM_CARFLOW() {
        return MOM_CARFLOW;
    }

    public void setMOM_CARFLOW(Integer MOM_CARFLOW) {
        this.MOM_CARFLOW = MOM_CARFLOW;
    }

    public Integer getMOM_TRUCKFLOW() {
        return MOM_TRUCKFLOW;
    }

    public void setMOM_TRUCKFLOW(Integer MOM_TRUCKFLOW) {
        this.MOM_TRUCKFLOW = MOM_TRUCKFLOW;
    }

    public Integer getUNKNOWN_EX() {
        return UNKNOWN_EX;
    }

    public void setUNKNOWN_EX(Integer UNKNOWN_EX) {
        this.UNKNOWN_EX = UNKNOWN_EX;
    }

    public Integer getUNKNOWN_EN() {
        return UNKNOWN_EN;
    }

    public void setUNKNOWN_EN(Integer UNKNOWN_EN) {
        this.UNKNOWN_EN = UNKNOWN_EN;
    }

    public Integer getYOY_UNKNOWN_EX() {
        return YOY_UNKNOWN_EX;
    }

    public void setYOY_UNKNOWN_EX(Integer YOY_UNKNOWN_EX) {
        this.YOY_UNKNOWN_EX = YOY_UNKNOWN_EX;
    }

    public Integer getYOY_UNKNOWN_EN() {
        return YOY_UNKNOWN_EN;
    }

    public void setYOY_UNKNOWN_EN(Integer YOY_UNKNOWN_EN) {
        this.YOY_UNKNOWN_EN = YOY_UNKNOWN_EN;
    }

    public Integer getMOM_UNKNOWN_EX() {
        return MOM_UNKNOWN_EX;
    }

    public void setMOM_UNKNOWN_EX(Integer MOM_UNKNOWN_EX) {
        this.MOM_UNKNOWN_EX = MOM_UNKNOWN_EX;
    }

    public Integer getMOM_UNKNOWN_EN() {
        return MOM_UNKNOWN_EN;
    }

    public void setMOM_UNKNOWN_EN(Integer MOM_UNKNOWN_EN) {
        this.MOM_UNKNOWN_EN = MOM_UNKNOWN_EN;
    }
}
