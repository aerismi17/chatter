function Message (props){
    return <div className = 'container' >
        <div className = 'message-name'>{props.name}</div>
        <div className = 'message'>{props.text}</div>
    </div>
    
}

export default Message