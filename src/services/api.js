const URL = "http://localhost:3001/members";

export const getMembers = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const addMember = async (member) => {
    return fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(member),
    });
};

export const deleteMember = async (id) => {
    return fetch(`${URL}/${id}`, {
        method: "DELETE",
    });
};

export const updateMember = async (id, member) => {
    return fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(member),
    });
};