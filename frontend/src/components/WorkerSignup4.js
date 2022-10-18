import React from "react";
import './styles/WorkerSignup.css';

class WorkerSignUp4 extends React.Component{

    render(){
        return (
            <div className="green-background-div">
                <div className="center-div">
                    <form>
                        <div className="signup">
                            <h1 >Sign Up</h1>
                        </div>
                        <div>
                            <h3>House no./Unit:</h3>
                            <input type="text" placeholder="Username" required />
                            <h3>Street:</h3>
                            <input type="text" placeholder="Password" required />
                            <h3>Sector/Area:</h3>
                            <input type="text" placeholder="Confirm Password" required />
                        </div>
                        <div className="center-text">
                            <button>Sign up</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        );
    }

}

export default WorkerSignUp4;