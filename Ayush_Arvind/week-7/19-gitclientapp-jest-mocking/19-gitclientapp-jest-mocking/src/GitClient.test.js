import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("GitClient", () => {
    test("fetches repositories using axios", async () => {
        const repositories = [
            { id: 1, name: "react-project" },
            { id: 2, name: "spring-project" }
        ];

        axios.get.mockResolvedValue({
            data: repositories
        });

        const client = new GitClient();
        const result = await client.getRepositories(
            "test-user"
        );

        expect(axios.get).toHaveBeenCalledWith(
            "https://api.github.com/users/test-user/repos"
        );

        expect(result).toEqual(repositories);
    });
});
