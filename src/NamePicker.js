import {useState} from 'react'
import { BiPencil } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(
        localStorage.getItem('username') || '') 

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username)
    }

    function keyPress(e){
        if(e.key === 'Enter'){
            save()
        }
    }

    if(showInput) {
        return <div className = 'name-picker'>
            <input className = 'nameChange' 
                placeholder = 'Your name'
                value = {username} 
                onChange = {e=> setUsername(e.target.value)}
                onKeyPress = {keyPress}
            /> 
            <button className = 'sendForm' 
                onClick = {save}>
            <BiCheck color = 'white' />
            </button>
        </div>
    }
    return <div className = 'name-picker'>
        <div className = 'name'>{username}</div>
        <BiPencil color = 'white' 
            onClick = {()=> setShowInput(true)} />
    </div>
}

export default NamePicker