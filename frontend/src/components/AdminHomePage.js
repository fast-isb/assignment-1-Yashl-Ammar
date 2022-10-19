import React from 'react';
import NavBar from './NavBarLogin&SignUp.js';

class AdminHomePage extends React.Component {
    state = {  };
    render() { 
        return (
            <div>
                <div>
                    <NavBar />
                    <div className='flex-container'>
                        <div className='side-navigation'>

                        </div>
                        <div className='basic-information'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AdminHomePage;