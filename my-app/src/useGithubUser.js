import { useEffect, useState } from "react"

export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const url = `https://api.github.com/users/${username}`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {setData(json)})
    }, [username, url]) 

    return {
        data: data
    }
}