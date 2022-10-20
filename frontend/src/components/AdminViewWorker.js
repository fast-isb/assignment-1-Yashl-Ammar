import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBarLogin&SignUp.js';
import './styles/AdminViewWorker.css'


const WorkerFeildViewTile = (props) => {
    return (
        <tr>
            <td >{props.field}</td> 
            <td >{props.value}</td> 
            <td ><button className='adminview-worker-data-display-modify-button' > Modify </button> </td>  
        </tr>
    );
}

const AdminViewWorker = () => {
    let location = useLocation();
    let username = {username : location.state.username};

    const [worker , setWorker] = useState({});

    useEffect( () => {
        let fetchData = async () => {
            let response = await axios.post('http://localhost:3001/worker/getworker', username);
            console.log(response);
            setWorker(response.data[0]);
        }
        fetchData();
        
    },  [])

    let checkBanned = () => {
        if(worker.banned === false){
            return 'Ban';
        }
        return 'UnBan'
    }

    let banStringConversion = () => {
        if(worker.banned === true){
            return 'Banned';
        }
        return 'Not Banned'
    }

    return ( 
        <div>
            <div>
                <NavBar />
            </div>
            <div className='adminview-worker-data-display'>
                <h1 className='adminview-worker-data-display-title'>{worker.fname} {worker.lname}</h1>
                <hr className='adminview-worker-data-display-title-hr' />
                <button className='adminview-worker-data-display-button'>  Delete </button>
                <button className='adminview-worker-data-display-button'>  {checkBanned()} </button>
                
                <div className='adminview-worker-data-display-table'>
                <br />
                    <table>
                        <thead>
                            <tr>
                                <th className='adminview-worker-data-display-table-th1'>Field</th> 
                                <th className='adminview-worker-data-display-table-th1'>Value</th> 
                                <th className='adminview-worker-data-display-table-th2'>Modify</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <WorkerFeildViewTile field='Username' value={worker.username} />
                            <WorkerFeildViewTile field='First Name' value={worker.fname} />
                            <WorkerFeildViewTile field='Last Name' value={worker.lname} />
                            <WorkerFeildViewTile field='DOB' value={worker.dob.substring(0,10)} />
                            <WorkerFeildViewTile field='banned' value={banStringConversion()} />
                            <WorkerFeildViewTile field='Domain' value={worker.domain} />
                            <WorkerFeildViewTile field='Service' value={worker.service} />
                            <WorkerFeildViewTile field='Phone Number' value={worker.pNo} />
                            <WorkerFeildViewTile field='House Number' value={worker.hNo} />
                            <WorkerFeildViewTile field='Street' value={worker.street} />
                            <WorkerFeildViewTile field='Sector' value={worker.sector} />
                            <WorkerFeildViewTile field='City' value={worker.city} />
                            <WorkerFeildViewTile field='Password' value={worker.password} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default AdminViewWorker;