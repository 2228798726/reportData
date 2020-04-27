package com.util;

/**
 * @author 李沛然
 */
public class Calculate {

    public static float transNumber(String str) {
        if (str.indexOf("%") != -1) {
            if (str.indexOf("-") != -1) {
                String newStr = str.replace("%", "").replace("-", "");
                float number = Float.parseFloat(newStr) / 100 * -1;
                return number;
            } else {
                String newStr = str.replace("%", "");
                float number = Float.parseFloat(newStr) / 100;
                return number;
            }
        }else {
            return Integer.parseInt(str);
        }
    }

    public static int calculateFlow(String x,String y){

        int z= (int) (transNumber(x)/(1+transNumber(y)));
        return z;
    }
}
