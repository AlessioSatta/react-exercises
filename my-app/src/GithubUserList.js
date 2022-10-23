import React, { useEffect, useState } from 'react';

export function GithubUserList() {
    const [data, setData] = useState('')
    
    function handleInputChange(event) {
        setData(event.target.value)
    }

    function handleAddUser(event) {
        event.preventDefault()

        const data = []
        setData(data.push(event.target.value))
    }
    
    useEffect(() => {
        // non riesco a capire cosa inserire
    }, [])

    return (
        <div>
            <h1>Add username to the array and show them</h1>
            <input name='username' value={data} placeholder='Enter username' onChange={handleInputChange} />
            <button onClick={handleAddUser}>Add username</button>
        </div>
    )
}