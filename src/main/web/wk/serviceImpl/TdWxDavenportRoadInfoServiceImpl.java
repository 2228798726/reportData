package wk.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wk.dao.TdWxDavenportRoadInfoDao;
import wk.pojo.TdWxDavenportRoadInfo;
import wk.service.TdWxDavenportRoadInfoService;

/**
 * @author 李沛然
 */
@Service
public class TdWxDavenportRoadInfoServiceImpl implements TdWxDavenportRoadInfoService {
    /**
     * 添加日报-事件
     * @param tdWxDavenportRoadInfo
     * @return
     */
    @Autowired
    TdWxDavenportRoadInfoDao tdWxDavenportRoadInfoDao;
    @Override
    public int insert(TdWxDavenportRoadInfo tdWxDavenportRoadInfo){
        return  tdWxDavenportRoadInfoDao.insert(tdWxDavenportRoadInfo);
    }
}
