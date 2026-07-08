package com.ayush.basic;
import org.junit.jupiter.api.*; import static org.junit.jupiter.api.Assertions.*;
class CalculatorTest { private Calculator calculator; @BeforeEach void setUp(){ calculator=new Calculator(); } @AfterEach void tearDown(){ calculator=null; }
 @Test void testAdd(){ assertEquals(8, calculator.add(5,3)); }
 @Test void testSubtract(){ assertEquals(2, calculator.subtract(5,3)); }
 @Test void testMultiply(){ assertEquals(15, calculator.multiply(5,3)); }
 @Test void testDivide(){ assertEquals(2, calculator.divide(6,3)); }
 @Test void testDivideByZero(){ assertThrows(IllegalArgumentException.class, () -> calculator.divide(10,0)); }
}
