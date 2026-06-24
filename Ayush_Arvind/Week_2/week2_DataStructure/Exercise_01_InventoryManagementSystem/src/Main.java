public class Main {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();
        manager.addProduct(new Product(101, "Laptop", 10, 55000));
        manager.addProduct(new Product(102, "Mouse", 50, 599));
        manager.updateProduct(102, "Wireless Mouse", 45, 799);
        manager.displayProducts();
        manager.deleteProduct(101);
        System.out.println("After delete:");
        manager.displayProducts();
        System.out.println("Time Complexity with HashMap: add O(1), update O(1), delete O(1) average.");
    }
}
