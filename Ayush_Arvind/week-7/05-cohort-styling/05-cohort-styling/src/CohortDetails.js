import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
    const headingStyle = {
        color: cohort.status === "ongoing" ? "green" : "blue"
    };

    return (
        <div className={styles.box}>
            <h3 style={headingStyle}>{cohort.code}</h3>
            <dl>
                <dt>Technology</dt>
                <dd>{cohort.technology}</dd>
                <dt>Status</dt>
                <dd>{cohort.status}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
