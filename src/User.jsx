

const User = ({user}) => {
    const {name, email}=user;
    return (
        <div style={{
            border:'2px solid black',
            margin:'10px',
            borderRadius:'10px',
        }}>
            <h3>User :{name}</h3>
            <p>Email :{email}</p>
        </div>
    );
};

export default User;