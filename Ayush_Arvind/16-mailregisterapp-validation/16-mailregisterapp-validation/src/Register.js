import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const nextErrors = {};

        if (form.name.trim().length < 5) {
            nextErrors.name =
                "Name must contain at least 5 characters.";
        }

        if (
            !form.email.includes("@") ||
            !form.email.includes(".")
        ) {
            nextErrors.email =
                "Email must contain @ and .";
        }

        if (form.password.length < 8) {
            nextErrors.password =
                "Password must contain at least 8 characters.";
        }

        return nextErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Registration successful");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Mail Registration</h1>

            <div>
                <label>
                    Name
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>
                <p>{errors.name}</p>
            </div>

            <div>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
                <p>{errors.email}</p>
            </div>

            <div>
                <label>
                    Password
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <p>{errors.password}</p>
            </div>

            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
