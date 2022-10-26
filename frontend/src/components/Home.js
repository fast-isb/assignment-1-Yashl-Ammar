import React from "react";
import "./styles/Home.css";
import NavBar from "./NavBar.js";
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.pexels.com/photos/5186372/pexels-photo-5186372.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundPosition: "centre centre",
          }}
        >
          <div className="banner_contents">
            <h1>Mahir</h1>
          </div>

          <div className="banner_fadebottom"></div>
        </header>
        <div className="scope">
          <div>
            <NavBar />
          </div>
          <br></br>
          <h1>Scope</h1>
          <hr style={{ width: "7%", marginLeft: "47%" }}></hr>
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
          <br></br>
        </div>
        <div className="Para">
          <br></br>
          <h1>Our Unique Selling Points Make Us the Most Reliable Choice</h1>
          <hr style={{ width: "70%", marginLeft: "15%" }}></hr>
          <p>
            We understand your fears about letting a stranger come inside your
            home.
            <br></br>
            We know that you cannot trus,t just any Tom, Dick, Or Harry with
            your home possessions and your family’s safety.
            <br></br>
            That is why we have come up with services that cater to all your
            fears and concerns
          </p>
          <br></br>
          <br></br>
        </div>
        <footer className="banner-footer">
          <br></br>
          <h1>About Us</h1>
          <p>
            Previously known as Mr. Mahir, Mahir Company is your go-to and
            on-demand expert for all your Home & Personal Care needs.
            <br></br>
            We are serving you 24/7 since 2019. Now as Mahir Company, we are
            offering more accessible, reliable, fast, safe, and pocket-friendly
            services to you.
          </p>
          <br></br>
        </footer>
        © Copyright 2022 Mrmahir.com (pvt) Ltd.
      </div>
    );
  }
}

export default Home;
