public class Main {
    public static void main(String[] args) {
        TaskLinkedList list = new TaskLinkedList();
        list.add(new Task(1, "Design UI", "Pending"));
        list.add(new Task(2, "Build API", "In Progress"));
        list.traverse();
        System.out.println("Search: " + list.search(2));
        list.delete(1);
        System.out.println("After delete:");
        list.traverse();
        System.out.println("Linked list add at end O(n), search O(n), traverse O(n), delete O(n). Dynamic size is main advantage.");
    }
}
