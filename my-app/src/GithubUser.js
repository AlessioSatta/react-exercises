import React, { useEffect, useState } from 'react';

export function GithubUser({ username, item }) {
    const [data, setData] = useState(null)
    const url = `https://api.github.com/users/${username}`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {setData(json)})
    }, [username, url])

    return (
        <div>
            {/* {data && <h1>Lo username di Github è il seguente: {data.name}</h1>} */}
            {item && <h2>Username in lista: {item}</h2>}
        </div>
    )
}