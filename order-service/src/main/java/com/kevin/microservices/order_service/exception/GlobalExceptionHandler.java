package com.kevin.microservices.order_service.exception;

import com.kevin.microservices.order_service.dto.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(BusinessException exception) {
        ErrorResponse error = new ErrorResponse(
                exception.getStatusCode(),
                exception.getMessage()
        );

        return ResponseEntity.status(exception.getStatusCode()).body(error);
    }
}
