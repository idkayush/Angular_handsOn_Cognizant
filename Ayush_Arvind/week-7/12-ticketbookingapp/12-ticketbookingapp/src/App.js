import { useState } from "react";

function GuestPage() {
    return (
        <div>
            <h2>Welcome Guest</h2>
            <p>Browse available flights.</p>
        </div>
    );
}

function UserPage() {
    return (
        <div>
            <h2>Welcome User</h2>
            <p>You can now book flight tickets.</p>
            <button>Book Ticket</button>
        </div>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Ticket Booking App</h1>

            {isLoggedIn ? <UserPage /> : <GuestPage />}

            <button
                onClick={() => {
                    setIsLoggedIn((value) => !value);
                }}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default App;
