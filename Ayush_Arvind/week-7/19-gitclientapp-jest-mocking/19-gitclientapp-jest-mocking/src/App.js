import { useEffect, useState } from "react";
import GitClient from "./GitClient";

const client = new GitClient();

function App() {
    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        client.getRepositories("octocat")
            .then(setRepositories)
            .catch(() => {
                setError("Unable to load repositories.");
            });
    }, []);

    return (
        <div>
            <h1>GitHub Repositories</h1>

            {error && <p>{error}</p>}

            <ul>
                {repositories.map((repository) => (
                    <li key={repository.id}>
                        {repository.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
