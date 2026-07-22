const officeSpaces = [
    {
        name: "Downtown Workspace",
        rent: 55000,
        address: "MG Road, Bengaluru",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
    },
    {
        name: "Premium Business Hub",
        rent: 75000,
        address: "Cyber City, Gurugram",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500"
    }
];

function App() {
    return (
        <div>
            <h1>Office Space Rental</h1>
            {officeSpaces.map((office) => (
                <section key={office.name}>
                    <img
                        src={office.image}
                        alt={office.name}
                        width="350"
                    />
                    <h2>{office.name}</h2>
                    <p
                        style={{
                            color: office.rent < 60000
                                ? "red"
                                : "green"
                        }}
                    >
                        Rent: ₹{office.rent}
                    </p>
                    <p>Address: {office.address}</p>
                </section>
            ))}
        </div>
    );
}

export default App;
