import React, { useState } from 'react';
import { GithubUser } from './GithubUser';

export function GithubUserList() {
    const [item, setItem] = useState([])
    const [input, setInput] = useState('')

    function handleInputChange(event) {
        setInput(e => event.target.value)
    }
    
    const handleAddUser = () => {
        let arrayData = []
        arrayData = [...item]
        arrayData.push(input)
        setItem(arrayData)
        setInput('')
    }
return (
    <div>
        <h1>Add username to the array and show them</h1>
        <input name='username' value={input} placeholder='Enter username' onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add username</button>
        <ul>
            {item.map((item, index) => {
                return <li key={index + item}><GithubUser item={item} /></li>
            })}
        </ul>
    </div>
)
}