function Avatar (props) {
    return (
        <div className="A">
            <img 
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            />{""}
        
        <div className="UserInfo.name">{props.user.name}</div>
        </div>
        );
    }

    export default UserInfo;