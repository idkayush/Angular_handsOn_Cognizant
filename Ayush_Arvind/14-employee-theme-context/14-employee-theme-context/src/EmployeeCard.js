import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./styles.css";

function EmployeeCard({ employee }) {
    const theme = useContext(ThemeContext);

    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
            <button className={theme}>View Details</button>
        </div>
    );
}

export default EmployeeCard;
