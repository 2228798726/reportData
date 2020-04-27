package wk.pojo;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author 李沛然
 */
public class TdWxDavenportRoadInfo {
    /**
     *  编号
     */
    private  String ID;
    /**
     * 日期
     */
    private Date TOLLDATE;
    /**
     * 类型1-拥堵1小时 2-拥堵1-2小时 3-拥堵2小时以上
     */
    private  Integer TYPE;
    /**
     * 管理处名称
     */
    private  String OWNERNAME;
    /**
     * 内容
     */
    private  String CONTENT;

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

    public Integer getTYPE() {
        return TYPE;
    }

    public void setTYPE(Integer TYPE) {
        this.TYPE = TYPE;
    }

    public String getOWNERNAME() {
        return OWNERNAME;
    }

    public void setOWNERNAME(String OWNERNAME) {
        this.OWNERNAME = OWNERNAME;
    }

    public String getCONTENT() {
        return CONTENT;
    }

    public void setCONTENT(String CONTENT) {
        this.CONTENT = CONTENT;
    }
}
