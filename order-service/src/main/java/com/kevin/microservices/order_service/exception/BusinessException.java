package com.kevin.microservices.order_service.exception;


import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
public class BusinessException extends RuntimeException{
    private final int statusCode;

    public BusinessException(String message, int statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}
