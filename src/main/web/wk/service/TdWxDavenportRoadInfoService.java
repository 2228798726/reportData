package wk.service;

import wk.pojo.TdWxDavenportRoadInfo;

import java.util.List;

/**
 * @author 李沛然
 */
public interface TdWxDavenportRoadInfoService {
    /**
     * 添加日报-事件
     * @param tdWxDavenportRoadInfo
     * @return
     */
    public int insert(TdWxDavenportRoadInfo tdWxDavenportRoadInfo);
    /**
     * 批量添加-日报事件
     * @param tdWxDavenportRoadInfoList
     * @return
     */
    public int insertMulti(List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfoList);
}
