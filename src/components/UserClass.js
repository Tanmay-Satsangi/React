import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // Create state variable count, count2 with initial value = 0
        this.state = {
            count: 0,
            count2: 2
        };
        console.log("Child Component Render");
    }

    componentDidMount() {
        console.log("Child Compoent did Mount")
    }

    render() {
        const { name, location } = this.props;

        // accessing the state variable
        const { count, count2 } = this.state;
        console.log("Child Component Render");


        return (
            <div className="user-card">
                 
                <h1>Count: {count}</h1> {/* show state variable on web page */}
                {/* When the state Variable modify React will re-render the components. */}
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1

                    })   
                }}>
                    Count
                </button>

                <h2>Count2: { count2 }</h2> {/* show state variable on web page */}
               <h2>Name: { name }</h2>
               <h3>Location: { location }</h3>
               <h4>Contact: @tanmay</h4>
           </div>
       ); 
    }
}

export default UserClass;
