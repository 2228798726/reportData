package wk.dao;

import org.apache.ibatis.annotations.Param;
import wk.pojo.TdWxDailyReport;
import wk.pojo.TdWxDavenportRoadInfo;

import java.util.List;

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

    /**
     * 批量添加车流
     * @param tdWxDailyReportList
     * @return
     */
    public int insertMulti(@Param("list") List<TdWxDailyReport> tdWxDailyReportList);
}
