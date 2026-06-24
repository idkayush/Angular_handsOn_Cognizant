public class TaskLinkedList {
    private Task head;

    public void add(Task task) {
        if (head == null) { head = task; return; }
        Task current = head;
        while (current.next != null) current = current.next;
        current.next = task;
    }

    public Task search(int id) {
        Task current = head;
        while (current != null) {
            if (current.taskId == id) return current;
            current = current.next;
        }
        return null;
    }

    public void traverse() {
        Task current = head;
        while (current != null) { System.out.println(current); current = current.next; }
    }

    public void delete(int id) {
        if (head == null) return;
        if (head.taskId == id) { head = head.next; return; }
        Task current = head;
        while (current.next != null && current.next.taskId != id) current = current.next;
        if (current.next != null) current.next = current.next.next;
    }
}
