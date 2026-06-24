public class ObserverTest {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();
        market.registerObserver(new MobileApp());
        market.registerObserver(new WebApp());
        market.setStockPrice("TCS", 3850.75);
    }
}
