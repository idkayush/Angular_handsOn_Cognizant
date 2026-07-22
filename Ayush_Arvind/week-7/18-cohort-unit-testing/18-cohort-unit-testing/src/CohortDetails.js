function CohortDetails({ cohort }) {
    return (
        <div>
            <h3>{cohort.code}</h3>
            <p>{cohort.technology}</p>
            <p>{cohort.status}</p>
        </div>
    );
}

export default CohortDetails;
