import React, { Component } from 'react'
import UserMessages from './UserMessages'
import UserData from './UserData'

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoaded}/>
                <UserMessages isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default NestingComponents