public class Main {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager();
        manager.add(new Employee(1, "Ayush", "Developer", 60000));
        manager.add(new Employee(2, "Ankit", "Tester", 45000));
        manager.traverse();
        System.out.println("Search: " + manager.search(1));
        manager.delete(2);
        System.out.println("After delete:");
        manager.traverse();
        System.out.println("Array add O(1), search O(n), traverse O(n), delete O(n).");
    }
}
