// import React from "react";

// export class Login extends React.Component {
//     state = {
//         username: '',
//         password: '',
//         remember: false
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         const type = event.target.type
//         const checked = event.target.checked

//         this.setState({
//             [name]: type === 'checkbox' ? checked : value
//         })
//     }

//     onLogin = (event) => {
//         event.preventDefault()

//         console.log(this.state)
//     }

//     handleReset = (event) => {
//         event.preventDefault()

//         this.setState({
//             username: '',
//             password: '',
//             remember: false
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Login</h2>
//                 <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
//                 <input name="password" value={this.state.password} type="password" onChange={this.handleInputChange}></input>
//                 <input name="remember" checked={this.state.remember} type="checkbox" onChange={this.handleInputChange}></input>
//                 <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin} style={this.state.password.length < 8 ? {backgroundColor: 'red'} : {backgroundColor: 'buttonface'}}>login</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         )
//     }
// }

import React from "react";
import { useLogin } from "./useLogin";

export function Login() {
    const { Input, Login, Reset, data } = useLogin()

    return(
        <div>
            <h2>Login</h2>
            <input placeholder="username" name="username" value={data.username} onChange={Input}></input>
            <input placeholder="password" name="password" type="password" value={data.password} onChange={Input}></input>
            <input type="checkbox" name="remember" checked={data.remember} onChange={Input}></input>
            <button disabled={!data.username || !data.password} onClick={Login} style={data.password.length < 8 ? {backgroundColor: 'red'} : {backgroundColor: 'ButtonFace'}}>login</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}