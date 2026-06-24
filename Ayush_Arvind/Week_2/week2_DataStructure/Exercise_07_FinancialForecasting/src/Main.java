public class Main {
    public static void main(String[] args) {
        FinancialForecast forecast = new FinancialForecast();
        double currentValue = 10000;
        double growthRate = 0.08;
        int years = 5;
        System.out.println("Recursive Future Value: ₹" + forecast.futureValueRecursive(currentValue, growthRate, years));
        System.out.println("Iterative Optimized Future Value: ₹" + forecast.futureValueIterative(currentValue, growthRate, years));
        System.out.println("Recursive time complexity: O(n). Iterative version avoids recursive call stack overhead.");
    }
}
