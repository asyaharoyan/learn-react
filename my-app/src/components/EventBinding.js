import React from "react";

class EventBinding extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {

    //     this.setState((prevState, prevProps) =>{
    //         console.log(prevState);
    //         console.log(prevProps);
    //         return {
    //             introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
    //             buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
    //         }
    //     })
    // }

    handleClick = () => {

        this.setState((prevState, prevProps) =>{
            console.log(prevState);
            console.log(prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/* <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}
                {/* <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button> */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default EventBinding;