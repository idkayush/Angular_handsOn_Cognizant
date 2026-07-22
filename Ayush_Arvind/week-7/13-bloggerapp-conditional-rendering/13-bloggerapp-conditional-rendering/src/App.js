const books = [
    { id: 1, name: "Mastering React", price: 670 },
    { id: 2, name: "Deep Dive into Angular", price: 800 }
];

const blogs = [
    { id: 1, title: "React Learning", author: "Stephen" },
    { id: 2, title: "Modern JavaScript", author: "John" }
];

const courses = [
    { id: 1, name: "React", date: "5/6/2026" },
    { id: 2, name: "Angular", date: "10/6/2026" }
];

function BookDetails() {
    return (
        <section>
            <h2>Book Details</h2>
            {books.map((book) => (
                <p key={book.id}>
                    {book.name} - ₹{book.price}
                </p>
            ))}
        </section>
    );
}

function BlogDetails() {
    return (
        <section>
            <h2>Blog Details</h2>
            {blogs.map((blog) => (
                <p key={blog.id}>
                    {blog.title} by {blog.author}
                </p>
            ))}
        </section>
    );
}

function CourseDetails() {
    return (
        <section>
            <h2>Course Details</h2>
            {courses.map((course) => (
                <p key={course.id}>
                    {course.name} - {course.date}
                </p>
            ))}
        </section>
    );
}

function App() {
    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (
        <div>
            {showBooks && <BookDetails />}

            {showBlogs
                ? <BlogDetails />
                : <p>Blogs are hidden.</p>
            }

            {showCourses ? <CourseDetails /> : null}
        </div>
    );
}

export default App;
