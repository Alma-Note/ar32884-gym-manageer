import { useState } from "react";
import { addMember } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddMember() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const newMember = {
            name,
            surname,
            age,
            gender
        };

        await addMember(newMember);
        navigate("/members");
    };

    return (
        <div>
            <h1>Add Member</h1>

            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
            <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />

            <select onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <button onClick={handleSubmit}>Save</button>
        </div>
    );
}

export default AddMember;