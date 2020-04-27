package wk.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wk.dao.TdWxDailyReportDao;
import wk.pojo.TdWxDailyReport;
import wk.service.TdWxDailyReportService;

import java.util.List;

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

    @Override
    public int insertMulti(List<TdWxDailyReport> tdWxDailyReportList) {
        return tdWxDailyReportDao.insertMulti(tdWxDailyReportList);
    }
}
