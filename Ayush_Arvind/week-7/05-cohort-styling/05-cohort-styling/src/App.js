import CohortDetails from "./CohortDetails";

const cohorts = [
    { code: "INTADMDF10", technology: "React", status: "ongoing" },
    { code: "ADM21JF014", technology: "Java", status: "completed" }
];

function App() {
    return (
        <div>
            <h1>Cohort Dashboard</h1>
            {cohorts.map((cohort) => (
                <CohortDetails key={cohort.code} cohort={cohort} />
            ))}
        </div>
    );
}

export default App;
