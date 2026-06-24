public class FinancialForecast {
    public double futureValueRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return futureValueRecursive(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public double futureValueIterative(double currentValue, double growthRate, int years) {
        double value = currentValue;
        for (int i = 0; i < years; i++) value *= (1 + growthRate);
        return value;
    }
}
