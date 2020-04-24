package wk.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wk.dao.TdWxDailyReportDao;
import wk.pojo.TdWxDailyReport;
import wk.service.TdWxDailyReportService;

/**
 * @author 李沛然
 */
@Service
public class TdWxDailyReportServiceImpl implements TdWxDailyReportService {
    /**
     * 添加日报-流量
     * @param tdWxDailyReportDao
     * @return
     */
    @Autowired
    TdWxDailyReportDao tdWxDailyReportDao;


    @Override
    public int insert(TdWxDailyReport tdWxDailyReport) {
        return tdWxDailyReportDao.insert(tdWxDailyReport);
    }
}
