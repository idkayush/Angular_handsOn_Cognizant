const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 82 },
    { name: "Gill", score: 68 },
    { name: "Pant", score: 75 },
    { name: "Rahul", score: 64 },
    { name: "Hardik", score: 71 },
    { name: "Jadeja", score: 59 },
    { name: "Ashwin", score: 48 },
    { name: "Bumrah", score: 35 },
    { name: "Shami", score: 28 },
    { name: "Siraj", score: 31 }
];

function ListOfPlayers() {
    const lowScorers = players.filter(
        (player) => player.score < 70
    );

    return (
        <div>
            <h2>All Players</h2>
            {players.map((player) => (
                <p key={player.name}>
                    {player.name}: {player.score}
                </p>
            ))}

            <h2>Players Below 70</h2>
            {lowScorers.map((player) => (
                <p key={player.name}>
                    {player.name}: {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListOfPlayers;
