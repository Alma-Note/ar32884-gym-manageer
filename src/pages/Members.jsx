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
        try {
            const data = await getMembers();
            setMembers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.log("Error fetching members:", error);
            setMembers([]);
        }
    };

    // DELETE
    const handleDelete = useCallback(async (id) => {
        try {
            await deleteMember(id);
            loadMembers();
        } catch (error) {
            console.log("Error deleting member:", error);
        }
    }, []);

    // SEARCH FILTER
    const filteredMembers = useMemo(() => {
        return members.filter((m) =>
            m.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [members, search]);

    return (
        <div>
            <h1>Members</h1>

            <p>Total: {members.length}</p>

            <input
                placeholder="Search member..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br /><br />

            {filteredMembers.length === 0 ? (
                <p>No members found</p>
            ) : (
                filteredMembers.map((m, index) => (
                    <div
                        key={m.id}
                        style={{
                            border: "1px solid black",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >
                        <h3>{index + 1}. {m.name}</h3>
                        <p>Age: {m.age}</p>

                        <Link to={`/edit/${m.id}`}>
                            <button>Edit</button>
                        </Link>

                        <button onClick={() => handleDelete(m.id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Members;