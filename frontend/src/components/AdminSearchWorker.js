import React from 'react';
import NavBar from './NavBarLogin&SignUp.js';
import './styles/AdminSearchWorker.css';

class AdminSearchWorker extends React.Component {
    state = {
        searchText : "" ,
    } 

    onChangeSearch = e => {
        this.setState({
            searchText : e.target.value,
        });
    }

    onSubmit = e => {
        e.preventDefault();


    }

    render() { 
        return (
            <div>
                <NavBar />
                <div className='search-worker-container-div'>
                    <h1>Search Worker</h1>
                    <form onSubmit={this.onSubmit}>
                        <input className='worker-search-bar' type='text' required placeholder='Enter Worker Name' value={this.state.searchText} onChange={this.onChangeSearch} />
                        <input className='search-submit-button' type='submit' value='Search' />
                    </form>
                    
                    <div className='worker-search-results-div'>
                        <h1>Search Results :</h1>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default AdminSearchWorker;