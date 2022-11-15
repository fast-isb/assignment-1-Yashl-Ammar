import React from 'react';
import NavBar from './NavBarLogin&SignUp.js';
import './styles/AdminHomePage.css';
import circle from './circle-avatar.png';

class AdminHomePage extends React.Component {
    render() { 
        return (
            <div>
                <div className='homepage-container'>
                    <NavBar />
                    <div className='float-container'>
                        <div className='side-navigation'>
                            <img className='circle-avatar' src={circle} alt='Avatar' />
                            <hr></hr>
                            <button data-testid="AdminSearchWorkerButton" className='Admin-Navigation-Button'>Search Worker</button>
                            <hr></hr>
                            <button data-testid="AdminApproveWorkerButton" className='Admin-Navigation-Button'>Approve Worker</button>
                            <hr></hr>
                            <button data-testid="AdminSearchCustomerButton" className='Admin-Navigation-Button'>Search Customer</button>
                            <hr></hr>
                            <button data-testid="AdminManageServiceButton" className='Admin-Navigation-Button'>Manage Services</button>
                            <hr></hr>
                        </div>
                        <div className='basic-information'>
                            <h1 className='mahir-title'>Mahir</h1>
                            <hr className='mahir-hr'></hr>
                            <div className='about-section'>
                                <div>
                                    <h1 className='about-title'>About</h1>
                                    <p className='about-paragrapgh'>Previously known as Mr. Mahir, Mahir Company is your go-to and
                                    on-demand expert for all your Home & Personal Care needs.
                                    <br></br>
                                    We are serving you 24/7 since 2019. Now as Mahir Company, we are
                                    offering more accessible, reliable, fast, safe, and pocket-friendly
                                    services to you.
                                    </p>
                                    <br />
                                </div>
                                <hr />
                                <div>
                                    <h1>Scope</h1>
                                    <p>
                                        This multi-purpose app has been designed to offer a hassle-free
                                        booking of Home, Cleaning, Personal Care Services etc online.
                                        <br></br>
                                        You can book expert services through our app anywhere in the
                                        country.
                                        <br></br>
                                        Our workers are experts in their fields and quickly identify the
                                        cause of your problem and provide its solution.
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AdminHomePage;