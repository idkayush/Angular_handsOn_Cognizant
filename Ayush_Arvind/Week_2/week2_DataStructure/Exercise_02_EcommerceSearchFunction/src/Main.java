import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Keyboard", "Electronics"),
            new Product(2, "Laptop", "Electronics"),
            new Product(3, "Shoes", "Fashion")
        };
        SearchService search = new SearchService();
        System.out.println("Linear Search: " + search.linearSearch(products, "Laptop"));
        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        System.out.println("Binary Search: " + search.binarySearch(products, "Shoes"));
        System.out.println("Linear Search: O(n), Binary Search: O(log n) on sorted data.");
    }
}
