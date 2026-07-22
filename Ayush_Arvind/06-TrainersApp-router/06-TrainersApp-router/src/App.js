import {
    BrowserRouter,
    Link,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import Home from "./Home";
import TrainersList from "./TrainerList";
import TrainerDetails from "./TrainerDetails";
import trainers from "./TrainersMock";

function App() {
    return (
        <BrowserRouter>
            <h1>My Academy Trainers App</h1>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/trainers">Show Trainers</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/trainers"
                    element={<TrainersList trainers={trainers} />}
                />
                <Route
                    path="/trainers/:id"
                    element={<TrainerDetails />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
