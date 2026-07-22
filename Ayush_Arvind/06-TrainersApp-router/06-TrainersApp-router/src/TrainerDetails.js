import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails() {
    const { id } = useParams();
    const trainer = trainers.find(
        (item) => item.trainerId === Number(id)
    );

    if (!trainer) {
        return <h2>Trainer not found</h2>;
    }

    return (
        <div>
            <h2>Trainer Details</h2>
            <h3>{trainer.name} ({trainer.technology})</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <ul>
                {trainer.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrainerDetails;
