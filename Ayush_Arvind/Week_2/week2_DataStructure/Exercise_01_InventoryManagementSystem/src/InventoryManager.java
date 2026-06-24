import java.util.HashMap;
import java.util.Map;

public class InventoryManager {
    private Map<Integer, Product> products = new HashMap<>();

    public void addProduct(Product product) { products.put(product.getProductId(), product); }
    public void updateProduct(int id, String name, int quantity, double price) {
        Product product = products.get(id);
        if (product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
        }
    }
    public void deleteProduct(int id) { products.remove(id); }
    public Product getProduct(int id) { return products.get(id); }
    public void displayProducts() { products.values().forEach(System.out::println); }
}
