import React from "react";
import "./WorkerSigYashlnUp.css"

class WorkerSignUp extends React.Component{

    render(){
        return (
            <div>
                <div className="center">
                    <h3>First Name:</h3>
                    <input />
                    <h3>Last Names:</h3>
                    <input />
                    <h3>Date of Birth:</h3>
                    <input />
                    <h3>Phone Number:</h3>
                    <input />
                    <br/>
                    <button>Next</button>
                </div>

            </div>
        );
    }

}

export default WorkerSignUp;