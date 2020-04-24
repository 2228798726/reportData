package wk.service;

import wk.pojo.TdWxDailyReport;

/**
 * @author 李沛然
 */
public interface TdWxDailyReportService {
    /**
     * 添加日报-流量
     * @param tdWxDailyReport
     * @return
     */
    public int insert(TdWxDailyReport tdWxDailyReport);
}
