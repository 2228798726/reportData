package wk.dao;

import org.apache.ibatis.annotations.Param;
import wk.pojo.TdWxDavenportRoadInfo;

import java.util.List;

/**
 * @author 李沛然
 */
public interface TdWxDavenportRoadInfoDao {
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
    public int insertMulti(@Param("list") List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfoList);
}
