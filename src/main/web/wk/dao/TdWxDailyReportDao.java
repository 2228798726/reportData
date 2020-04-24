package wk.dao;

import wk.pojo.TdWxDailyReport;

/**
 * @author 李沛然
 */
public interface TdWxDailyReportDao {
    /**
     * 添加日报-流量
     * @param tdWxDailyReport
     * @return
     */
    public int insert(TdWxDailyReport tdWxDailyReport);
}
