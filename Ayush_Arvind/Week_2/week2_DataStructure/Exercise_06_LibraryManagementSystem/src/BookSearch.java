public class BookSearch {
    public Book linearSearch(Book[] books, String title) {
        for (Book book : books) if (book.title.equalsIgnoreCase(title)) return book;
        return null;
    }

    public Book binarySearch(Book[] books, String title) {
        int left = 0, right = books.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = books[mid].title.compareToIgnoreCase(title);
            if (cmp == 0) return books[mid];
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}
