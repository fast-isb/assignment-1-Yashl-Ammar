import React from "react";
import './styles/WorkerSignup.css';

class WorkerSignUp3 extends React.Component{

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
                            <input type="text" placeholder="House no./Unit" required />
                            <h3>Street:</h3>
                            <input type="text" placeholder="Street" required />
                            <h3>Sector/Area:</h3>
                            <input type="text" placeholder="Sector/Area" required />
                            <h3>City:</h3>
                            <input type="text" placeholder="City" required />
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

export default WorkerSignUp3;