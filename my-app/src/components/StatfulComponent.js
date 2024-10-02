import React from "react";

class StatfulComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0
        };
    }

    // render() {
    //     return <h1>Hello from StatefulComponent {this.props.greeting}</h1>
    // }

    handleClick() {
        // this.setState({
        //     introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
        //     buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        // }, ()=>{
        //     console.log(this.state.introduction);
        //     console.log(this.state.buttonText);
        // });
        // console.log(this.state.introduction);
        // console.log(this.state.buttonText); wrong solution

        this.setState((prevState, prevProps) =>{
            console.log(prevState);
            console.log(prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    incrementMethod() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementMethod()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatfulComponent;