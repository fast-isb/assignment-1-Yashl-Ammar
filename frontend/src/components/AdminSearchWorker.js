import React from 'react';
import NavBar from './NavBarLogin&SignUp.js';
import './styles/AdminSearchWorker.css';
import axios from 'axios';
import { Link } from "react-router-dom";

//worker tile
let WorkerTile = (props) => {

    let checkBanned = () => {
        if(props.worker.banned === false){
            return 'Not Banned';
        }
        return 'Banned';
    }

    return (
        <tr className='workertile-content'>
            <td>{props.worker.fname}</td>
            <td>{props.worker.lname}</td>
            <td>{props.worker.dob.substring(0,10)}</td>
            <td>{props.worker.service}</td>
            <td>{checkBanned()}</td>
            <td><button className='worker-search-result-view-button' > <Link  className='admin-search-worker-view-link' to='/admin/viewworker' state={{username : props.worker.username }} > View </Link></button></td>
        </tr>
    );
}



class AdminSearchWorker extends React.Component {
    state = {
        searchText : "" ,
        workerList : [],
    } 

    onChangeSearch = e => {
        this.setState({
            searchText : e.target.value,
        });
    }

    onSubmit = async e => {
        e.preventDefault();

        const workerName = {
            name : this.state.searchText,
        }

        let response = await axios.post('http://localhost:3001/worker/search', workerName);
        this.setState({workerList : response.data});

        console.log(response.data)
    }

    displayWorkerList = () => {

        if(this.state.workerList.length === 0){
            return <tr key='no-result'>
                <td></td>
                <td></td>
                <td> <h1 > No result Found </h1> </td>
                <td></td>
                <td></td>
            </tr>
        }
        let results = this.state.workerList.map((curr) => {
            return <WorkerTile worker={curr} key='worker-search-list' />
        })

        return results;
    }

    render() { 
        return (
            <div>
                <NavBar />
                <div className='search-worker-container-div'>
                    <h1>Search Worker</h1>
                    <form onSubmit={this.onSubmit}>
                        <input data-testid="searchField" className='worker-search-bar' type='text' required placeholder='Enter Worker Name' value={this.state.searchText} onChange={this.onChangeSearch} />
                        <input data-testid="searchButton" className='search-submit-button' type='submit' value='Search' />
                    </form>
                    
                    <div className='worker-search-results-div'>
                        <h1>Search Results :</h1>
                        <div > 
                            <table className='worker-search-result-table'>
                                <thead >
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date of Birth</th>
                                        <th>Service</th>
                                        <th>Ban Status</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayWorkerList()}
                                </tbody>
                            </table>
                         </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default AdminSearchWorker;