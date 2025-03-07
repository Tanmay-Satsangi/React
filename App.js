import React from "react"
import ReactDOM from "react-dom/client"

// 1. Print "Namaste React" by using React
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

// 2. Print "Namaster React by using JSX using" JSX
// const jsxHeading = (
//         <h1 id="heading">
//         Namaste React by using JSX 
//         </h1>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// Functional Components: 
// const HeadingComponent = () => {
//     return <h1 className="heading"> Namaste React Functional Components </h1>
// }

// root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComponent/>)



//Create jsx
// const jsxHeading = <h1 className="heading">Namaste React by using jsx</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)

// Create Functional Components

const number = 1000;

const HeadingComponent = () => (
    <div id="container">
        {number}
        <h1> Namaste React by using Functional Component</h1>

    </div>
    
)

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)






