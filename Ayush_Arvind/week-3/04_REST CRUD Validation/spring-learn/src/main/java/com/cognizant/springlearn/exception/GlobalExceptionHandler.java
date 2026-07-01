package com.cognizant.springlearn.exception;
import java.util.*; import org.springframework.http.*; import org.springframework.web.bind.MethodArgumentNotValidException; import org.springframework.web.bind.annotation.*;
@RestControllerAdvice
public class GlobalExceptionHandler {
 @ExceptionHandler(MethodArgumentNotValidException.class)
 public ResponseEntity<Map<String,Object>> handleValidation(MethodArgumentNotValidException ex){
   List<String> errors = ex.getBindingResult().getFieldErrors().stream().map(e -> e.getDefaultMessage()).toList();
   return ResponseEntity.badRequest().body(Map.of("status",400,"error","Bad Request","messages",errors));
 }
 @ExceptionHandler(NoSuchElementException.class)
 public ResponseEntity<Map<String,Object>> handleNotFound(NoSuchElementException ex){ return ResponseEntity.status(404).body(Map.of("status",404,"error","Not Found","message",ex.getMessage())); }
}
