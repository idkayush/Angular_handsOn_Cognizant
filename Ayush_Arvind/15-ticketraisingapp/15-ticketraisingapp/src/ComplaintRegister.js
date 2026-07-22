import { useState } from "react";

function ComplaintRegister() {
    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint submitted successfully. Reference number: ${referenceNumber}`
        );

        setEmployeeName("");
        setComplaint("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Complaint Register</h1>

            <label>
                Employee Name
                <input
                    type="text"
                    value={employeeName}
                    onChange={(event) => {
                        setEmployeeName(event.target.value);
                    }}
                    required
                />
            </label>

            <br />
            <br />

            <label>
                Complaint
                <textarea
                    value={complaint}
                    onChange={(event) => {
                        setComplaint(event.target.value);
                    }}
                    required
                />
            </label>

            <br />
            <br />

            <button type="submit">Submit Complaint</button>
        </form>
    );
}

export default ComplaintRegister;
