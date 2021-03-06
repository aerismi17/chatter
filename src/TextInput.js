import {useState} from 'react'

function TextInput(props) {
    const [text, setText] = useState('')
    function sendMessage(){
        if(text==='') return //skip the function, we don't want users to send an empty message
        props.send(text)
        setText('')
    }
    function keyPressed(e){
        if(e.key === 'Enter'){
            sendMessage()
        }
    }
    return <footer className = 'text-input'>
        <input className = 'input'
            placeholder = "Say something..."
            value = {text}
            onChange = {e => setText(e.target.value)}
            onKeyPress = {keyPressed}
        />
        <button className = 'button' onClick = {sendMessage}//disabled = {!text}
        >>
        </button>
    </footer>
}

export default TextInput