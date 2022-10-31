import { useState } from "react"

export function useLogin() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin(event) {
        event.preventDefault()

        console.log(data)
    }

    function handleReset(event) {
        event.preventDefault()

        setData({
                username: '',
                password: '',
                remember: false
            }
        )
    }

    return {
        Input: handleInputChange,
        Login: onLogin,
        Reset: handleReset,
        data: data
    }
}