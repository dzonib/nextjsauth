import React, {Component} from 'react'

export default class RegisterComponent extends Component {
    state = {
        email: '',
        password: ''
    }

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler = e => {
        e.preventDefault()
        
    }

    render() {
        return (
            <>
            <h1>Register</h1>
            <form onSubmit={this.onSubmitHandler}>
                <input 
                    type="text" 
                    onChange={this.onChangeHandler} 
                    name="email" 
                    placeholder="email"
                    value={this.state.email}
                />
                <input 
                    type="text" 
                    onChange={this.onChangeHandler} 
                    name="password" 
                    placeholder="password"
                    value={this.state.password}
                />
                <button>Register</button>
            </form>
            </>
        )
    }
}