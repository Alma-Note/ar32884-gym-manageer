import { useRef, useState, useCallback, useEffect } from "react";
import { addMember } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddMember() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const navigate = useNavigate();

    // useRef -> focus automatik në inputin e parë
    useEffect(() => {
        nameRef.current.focus();
    }, []);

    // useCallback -> optimizim i funksionit
    const handleSubmit = useCallback(async () => {
        if (!name || !age) return;

        const newMember = {
            name,
            age,
        };

        await addMember(newMember);
        navigate("/members");
    }, [name, age, navigate]);

    return (
        <div>
            <p>add member</p>
            <h1>Add Member</h1>

            <input
                ref={nameRef}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                ref={ageRef}
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button onClick={handleSubmit}>Save</button>
        </div>
    );
}

export default AddMember;