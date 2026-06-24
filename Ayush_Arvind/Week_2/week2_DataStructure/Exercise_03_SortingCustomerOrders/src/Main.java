public class Main {
    public static void main(String[] args) {
        Order[] orders = {
            new Order(1, "Ayush", 4500),
            new Order(2, "Rahul", 1500),
            new Order(3, "Neha", 7000)
        };
        OrderSorter sorter = new OrderSorter();
        sorter.quickSort(orders, 0, orders.length - 1);
        for (Order order : orders) System.out.println(order);
        System.out.println("Bubble Sort: O(n^2). Quick Sort average: O(n log n), usually preferred for larger data.");
    }
}
