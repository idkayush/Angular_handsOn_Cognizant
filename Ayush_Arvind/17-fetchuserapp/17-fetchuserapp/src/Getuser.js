import React, { Component } from "react";

class Getuser extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null, error: null };
    }

    async componentDidMount() {
        try {
            const response = await fetch(
                "https://api.randomuser.me/"
            );

            if (!response.ok) {
                throw new Error("Unable to fetch user.");
            }

            const data = await response.json();

            this.setState({
                user: data.results[0]
            });
        } catch (error) {
            this.setState({
                error: error.message
            });
        }
    }

    render() {
        const { user, error } = this.state;

        if (error) {
            return <p>{error}</p>;
        }

        if (!user) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1>
                    {user.name.title} {user.name.first}
                </h1>

                <img
                    src={user.picture.large}
                    alt={user.name.first}
                />
            </div>
        );
    }
}

export default Getuser;
