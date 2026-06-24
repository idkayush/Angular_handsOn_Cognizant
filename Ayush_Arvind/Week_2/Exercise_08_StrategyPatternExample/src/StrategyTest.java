public class StrategyTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext(new CreditCardPayment());
        context.executePayment(1200);
        context.setStrategy(new PayPalPayment());
        context.executePayment(800);
    }
}
