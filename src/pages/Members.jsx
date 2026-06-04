import { useEffect, useState, useMemo, useCallback } from "react";
import { getMembers, deleteMember } from "../services/api";
import { Link } from "react-router-dom";

function Members() {
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("");

    // FETCH DATA
    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        const data = await getMembers();
        setMembers(data);
    };

    // DELETE (useCallback)
    const handleDelete = useCallback(async (id) => {
        await deleteMember(id);
        loadMembers();
    }, []);

    // SEARCH FILTER (useMemo)
    const filteredMembers = useMemo(() => {
        return members.filter((m) =>
            m.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [members, search]);

    return (
        <div>
            <h1>Members </h1>
<p>members</p>
            {/* SEARCH INPUT */}
            <input
                placeholder="Search member..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br /><br />

            {/* LIST */}
            {filteredMembers.map((m) => (
                <div key={m.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h3>{m.name}</h3>
                    <p>Age: {m.age}</p>

                    <Link to={`/edit/${m.id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(m.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Members;