package com.result;
import com.util.ResourcesUtil;

import java.io.Serializable;

/**
 * @author 李沛然
 */
public class ResultEntity<T> implements Serializable{
	private static final long serialVersionUID = 1L;
	/**
	 * 错误码
	 */
	private String errorCode;
	/**
	 * 错误信息
	 */
	private String message;
	private T data;
	
	public ResultEntity(String errorCode, String message, T data) {
		super();
		this.errorCode = errorCode;
		this.message = message;
		this.data = data;
	}
	
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}

	/**
	 * 请求成功方法
	 * @param data
	 * @param <T>
	 * @return
	 */
	public  static<T>  ResultEntity<T> createSuccessResult(T data){
		ResultEntity<T> resultEntity = new ResultEntity<T>("0","成功",data);
		return resultEntity;
	}

	/**
	 * 请求错误方法
	 * @param errorCode
	 * @param <T>
	 * @return
	 */
	public  static<T> ResultEntity<T> createFailResult(Integer errorCode){
		ResultEntity<T> resultEntity = new ResultEntity<T>(String.valueOf(errorCode), ResourcesUtil.getMessageByCode(errorCode),null);
		return resultEntity;
	}
}
