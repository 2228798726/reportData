package wk.pojo;

import java.util.ArrayList;
import java.util.List;

public class TdObiect {
    List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfos;
    TdReception tdReception;

    public List<TdWxDavenportRoadInfo> getTdWxDavenportRoadInfos() {
        return tdWxDavenportRoadInfos;
    }

    public void setTdWxDavenportRoadInfos(List<TdWxDavenportRoadInfo> tdWxDavenportRoadInfos) {
        this.tdWxDavenportRoadInfos = tdWxDavenportRoadInfos;
    }

    public TdReception getTdReception() {
        return tdReception;
    }

    public void setTdReception(TdReception tdReception) {
        this.tdReception = tdReception;
    }
}
