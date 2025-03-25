import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor() {
        super()
        console.log("Parent Component");
    }

    componentDidMount() {
        console.log("Parent componentDidMount")

    }

    render() {
        console.log("Parentrender")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web series</h2>
                <User name={"Tanmay (function)"} location={"Dehradun (function)"}/>
                <UserClass name={"Tanmay (Class)"} location={ "Indore (Class)" } />
            </div>
        )
    }
}

export default About;
