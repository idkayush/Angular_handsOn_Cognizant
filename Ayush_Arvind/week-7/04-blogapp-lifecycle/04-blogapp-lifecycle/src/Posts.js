import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], error: null };
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error) {
        this.setState({ error: error.message });
    }

    async loadPosts() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                throw new Error("Unable to load posts");
            }

            const data = await response.json();
            const posts = data.map(
                (item) => new Post(item.id, item.title, item.body)
            );

            this.setState({ posts });
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <h3>{error}</h3>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {posts.map((post) => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                ))}
            </div>
        );
    }
}

export default Posts;
