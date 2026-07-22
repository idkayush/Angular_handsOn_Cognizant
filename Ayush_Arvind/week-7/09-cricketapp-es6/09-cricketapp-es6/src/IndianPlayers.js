function IndianPlayers() {
    const team = ["Virat", "Rohit", "Gill", "Pant", "Rahul", "Hardik"];
    const [first, second, third, fourth, fifth, sixth] = team;

    const oddTeam = [first, third, fifth];
    const evenTeam = [second, fourth, sixth];

    const t20Players = ["Surya", "Rinku"];
    const ranjiPlayers = ["Sarfaraz", "Pujara"];
    const mergedPlayers = [...t20Players, ...ranjiPlayers];

    return (
        <div>
            <h2>Odd Team Players</h2>
            <p>{oddTeam.join(", ")}</p>

            <h2>Even Team Players</h2>
            <p>{evenTeam.join(", ")}</p>

            <h2>Merged Players</h2>
            <p>{mergedPlayers.join(", ")}</p>
        </div>
    );
}

export default IndianPlayers;
