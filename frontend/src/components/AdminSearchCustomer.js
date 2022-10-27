import React from 'react';
import NavBar from './NavBarLogin&SignUp.js';
import './styles/AdminSearchcustomer.css';
import axios from 'axios';
import { Link } from "react-router-dom";

let CustomerTile = (props) => {

    let checkBanned = () => {
        if(props.customer.banned === false){
            return 'Not Banned';
        }
        return 'Banned';
    }

    return (
        <tr className='customertile-content'>
            <td>{props.customer.userName}</td>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.Address}</td>
            <td>{checkBanned}</td>
            <td><button className='customer-search-result-view-button' > <Link  className='admin-search-customer-view-link' to='/admin/viewcustomer' state={{username : props.customer.userName }} > View </Link></button></td>
        </tr>
    );
}



class AdminSearchcustomer extends React.Component {
    state = {
        searchText : "" ,
        customerList : [],
    } 

    onChangeSearch = e => {
        this.setState({
            searchText : e.target.value,
        });
    }

    onSubmit = async e => {
        e.preventDefault();

        const customerName = {
            name : this.state.searchText,
        }

        let response = await axios.post('http://localhost:3001/customer/search', customerName);
        
        this.setState({customerList : response.data});

        console.log(response.data)
    }

    displaycustomerList = () => {

        if(this.state.customerList.length === 0){
            return <tr key='no-result'>
                <td></td>
                <td></td>
                <td> <h1 > No result Found </h1> </td>
                <td></td>
                <td></td>
            </tr>
        }
        let results = this.state.customerList.map((curr) => {
            console.log(curr)
            return <CustomerTile customer={curr} key='customer-search-list' />
        })

        return results;
    }

    render() { 
        return (
            <div>
                <NavBar />
                <div className='search-customer-container-div'>
                    <h1>Search customer</h1>
                    <form onSubmit={this.onSubmit}>
                        <input className='customer-search-bar' type='text' required placeholder='Enter customer Name' value={this.state.searchText} onChange={this.onChangeSearch} />
                        <input className='search-submit-button' type='submit' value='Search' />
                    </form>
                    
                    <div className='customer-search-results-div'>
                        <h1>Search Results :</h1>
                        <div > 
                            <table className='customer-search-result-table'>
                                <thead >
                                    <tr>
                                        <th>Username</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Ban Status</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displaycustomerList()}
                                </tbody>
                            </table>
                         </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default AdminSearchcustomer;