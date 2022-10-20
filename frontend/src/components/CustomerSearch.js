import NavBar from "./NavBarLogin&SignUp"
import React from "react"
import "./styles/CustomerSearch.css"

function CustomerSearch(){
const[searchText,setSearchText]=React.useState("")

function action(){

}

   return(
    <div>
        <NavBar/>
        <div className="CustomerSearch">
            <form className="Customer-search-form" onSubmit={action}>
                <input className="customer-search-box" placeholder="Enter the service name" type="text"  value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                <input className="Customer-search-button" type="submit" value="Search"></input>
                <br></br>
            </form>
        </div>
    </div>
   )
}

export default CustomerSearch