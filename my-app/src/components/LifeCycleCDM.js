import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'loading'
        }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                data: 'Loaded'
            })
        }, 3000)
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default LifeCyclesCDM