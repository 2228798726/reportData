package wk.pojo;

import java.util.ArrayList;
import java.util.List;

public class TdObiect {
    List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfos;
    TdWxDailyReport tdWxDailyReport;

    public List<TdWxDavenportRoadInfo> getTdWxDavenportRoadInfos() {
        return tdWxDavenportRoadInfos;
    }

    public void setTdWxDavenportRoadInfos(List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfos) {
        this.tdWxDavenportRoadInfos = tdWxDavenportRoadInfos;
    }

    public TdWxDailyReport getTdWxDailyReport() {
        return tdWxDailyReport;
    }

    public void setTdWxDailyReport(TdWxDailyReport tdWxDailyReport) {
        this.tdWxDailyReport = tdWxDailyReport;
    }

    @Override
    public String toString() {
        return "TdObiect{" +
                "tdWxDavenportRoadInfos=" + tdWxDavenportRoadInfos +
                ", tdWxDailyReport=" + tdWxDailyReport +
                '}';
    }
}
