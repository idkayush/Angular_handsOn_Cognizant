import { useState } from "react";
import ThemeContext from "./ThemeContext";
import EmployeesList from "./EmployeesList";

const employees = [
    { id: 1, name: "Aditi", role: "Developer" },
    { id: 2, name: "Rohan", role: "Tester" }
];

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <button
                onClick={() => {
                    setTheme(
                        theme === "light" ? "dark" : "light"
                    );
                }}
            >
                Change Theme
            </button>

            <EmployeesList employees={employees} />
        </ThemeContext.Provider>
    );
}

export default App;
