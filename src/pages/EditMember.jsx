import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMembers, updateMember } from "../services/api";

function EditMember() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // LOAD CURRENT DATA
    useEffect(() => {
        loadMember();
    }, []);

    const loadMember = async () => {
        const data = await getMembers();
        const member = data.find((m) => m.id === Number(id));

        if (member) {
            setName(member.name);
            setAge(member.age);
        }
    };

    // UPDATE MEMBER
    const handleUpdate = useCallback(async () => {
        const updatedMember = {
            name,
            age,
        };

        await updateMember(id, updatedMember);
        navigate("/members");
    }, [name, age, id, navigate]);

    return (
        <div>
            <h1>Edit Member ✏️</h1>
<p>edit member</p>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
}

export default EditMember;