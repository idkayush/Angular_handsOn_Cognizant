import CohortDetails from "./CohortDetails";
import CohortData from "./Cohort";

function App() {
    return (
        <CohortDetails cohort={CohortData[0]} />
    );
}

export default App;
