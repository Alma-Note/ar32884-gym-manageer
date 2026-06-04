function MemberCard({ member, onDelete, onEdit }) {
    return (
        <div style={styles.card}>
            <h3>
                {member.name} {member.surname}
            </h3>

            <p>Age: {member.age}</p>
            <p>Gender: {member.gender}</p>

            <div style={styles.buttons}>
                <button onClick={() => onEdit(member.id)}>Edit</button>
                <button onClick={() => onDelete(member.id)}>Delete</button>
            </div>
        </div>
    );
}

export default MemberCard;