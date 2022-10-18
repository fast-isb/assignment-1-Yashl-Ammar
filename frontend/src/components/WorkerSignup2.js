import React from "react";
import './styles/WorkerSignup.css';

class WorkerSignUp2 extends React.Component{

    render(){
        return (
            <div className="green-background-div">
                <div className="center-div">
                    <form>
                        <div className="signup">
                            <h1 >Sign Up</h1>
                        </div>
                        <div>
                            <h3>Choose your domain:</h3>
                            <input type="text" placeholder="Domain" required />
                            <h3>Services you will provide:</h3>
                            <input type="text" placeholder="Services" required />
                        </div>
                        <div className="right-text">
                            <button>Next</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        );
    }

}

export default WorkerSignUp2;