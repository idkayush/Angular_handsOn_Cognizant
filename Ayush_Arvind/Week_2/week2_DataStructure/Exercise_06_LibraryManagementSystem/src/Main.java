import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Book[] books = {
            new Book(1, "Clean Code", "Robert Martin"),
            new Book(2, "Algorithms", "CLRS"),
            new Book(3, "Java Basics", "Oracle")
        };
        BookSearch search = new BookSearch();
        System.out.println("Linear: " + search.linearSearch(books, "Clean Code"));
        Arrays.sort(books, Comparator.comparing(b -> b.title));
        System.out.println("Binary: " + search.binarySearch(books, "Java Basics"));
        System.out.println("Use linear search for small/unsorted data. Use binary search for large sorted data.");
    }
}
