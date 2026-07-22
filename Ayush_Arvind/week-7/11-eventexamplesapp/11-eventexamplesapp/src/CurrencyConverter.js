import { useState } from "react";

function CurrencyConverter() {
    const [rupees, setRupees] = useState("");
    const [euros, setEuros] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setEuros((Number(rupees) / 90).toFixed(2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Currency Converter</h2>

            <input
                type="number"
                value={rupees}
                onChange={(event) => {
                    setRupees(event.target.value);
                }}
                placeholder="Amount in INR"
            />

            <button type="submit">Convert</button>

            {euros !== null && (
                <p>Euro: €{euros}</p>
            )}
        </form>
    );
}

export default CurrencyConverter;
