import { useEffect, useState } from "react";

export default function MeteoSearch({ setType }) {
    let [types, setTypes] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            const api_key = "54d1aec0ebc8a059046c1d10fe7f63bf";
            fetch(`https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port`)
                .then((response) => response.json())
                .then((data) => lastCalled && setTypes(data.features))
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);

    const handleSelection = (event) => {
        setType(event.target.value);
        setSelectedValue(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleSelection}>
            {types.map(({ type }) => (
                <option key={`geo-type-${type}`} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
}
