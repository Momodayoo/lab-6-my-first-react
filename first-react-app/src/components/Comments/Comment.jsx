import FormattedDate from "./FormattedDate";
import UserInfo from "./UserInfo";
function Comment (props) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={props.author} /> {/* here we pass the author prop down to the UserInfo component */}
           
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
               <FormattedDate></FormattedDate>
                {props.date.toLocaleString()}
            </div>
        </div>
    )
}

export default Comment