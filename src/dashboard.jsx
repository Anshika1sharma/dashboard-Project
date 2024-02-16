import React from "react";
import "./dashboard.css";
import { Link } from 'react-router-dom';


function Dashboard () {
  const users = 520;
  const projects = 59;
  const DateTime = "2 Aug 2023 11:49 AM";

  return(
    <div className="full-page">
      <div className="left-part">
        <div className="admin-part">
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5lfGL2QQLxIrLR6m5ZUGbiwTn7swh549AsCTRjAhsA&s" alt="user-img" />
          <p className="name">Kanwarjeet Singh</p>
          <p>Mgr Software Engineering </p>
          <p>Admin ▾</p>
        </div>
        <button className="approve-button"  >Approve</button>
        <button className="cancel-button" >Cancel</button>
        <div className="left-navigation">
          <Link to={'/home'} className="link" >Home</Link>
          <Link to={'/'} className="link" >Dashboard</Link>
          <Link to={'/manage'} className="link" >Manage Users</Link>
        </div>
        
      </div>
      <div className="main-part">
        <h1>Dashboard</h1>
        <div className="requests">
          <div className="img-area">
          <button className="img-button">
          <img src="https://cati.typepad.com/.a/6a00e5510582dd883401b8d1cc75d3970c-pi" alt="multiuser" />
          </button>
          <p className="num">{users}</p>
          <p>Customers Requests</p>
          </div>
          
          <div className="img-area">
          <button className="img-button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhRr51zmCNPYuSRBUXCDfhxkxPzCRYT1JfQ&usqp=CAU" alt="multiuser" /></button>
          <p className="num">{users}</p>
          <p>Company Requests</p>
          </div>

          <div className="img-area">
          <button className="img-button">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIPL6yk4hdR1OKZ9Ezv7Vubj0K89MSsIql5VYzP92epQxF-Q9re2ZOZareIv5IF71ua0&usqp=CAU" alt="multiuser" /></button>
          <p className="num">{users}</p>
          <p>IC Design Service <br />Provider Firm Request</p>
          </div>

          <div className="img-area">
          <button className="img-button">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lAd0PntexgECDv9K0O4CS_veMia984CwzyBUG8b4BhBDou663Pjb_S4HjXrB-Xu81Qg&usqp=CAU" alt="multiuser" />
          </button>
          <p className="num">{users}</p>
          <p>Domain Leader Requests</p>
          </div>

          <div className="img-area">
          <button className="img-button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWbjicyjcIXHZ3Mu-iB11Yjc8gL5laTEKDQ&usqp=CAU" alt="multiuser" /></button>
          <p className="num">{users}</p>
          <p>Engineergs Requests</p>
          </div> 
        </div>
        <div className="time-location">
           
              <div className="one">
                <p style={{color:"black" ,backgroundColor:"white" ,fontSize:"15px" ,fontWeight:"bold" ,border:"3px solid black"}}>{1}</p>
                <p>{DateTime}</p>
                <p>Name : ABC Location:Noida Nos of Employees:{projects} Projects Delievered:Link Existing Clients:Link</p>
              </div>
           
              <div className="one">
                <p style={{color:"black" ,backgroundColor:"white" ,fontSize:"15px" ,fontWeight:"bold" ,border:"3px solid black"}}>{2}</p>
                <p>{DateTime}</p>
                <p>Name : ABC Location:Noida Nos of Employees:{projects} Projects Delievered:Link Existing Clients:Link</p>
              </div>
            
        
              <div className="one">
                <p style={{color:"black" ,backgroundColor:"white" ,fontSize:"15px" ,fontWeight:"bold" ,border:"3px solid black"}}>{3}</p>
                <p>{DateTime}</p>
                <p>Name : ABC Location:Noida Nos of Employees:{projects} Projects Delievered:Link Existing Clients:Link</p>
              </div>
          
              <div className="one">
                <p style={{color:"black" ,backgroundColor:"white" ,fontSize:"15px" ,fontWeight:"bold" ,border:"3px solid black"}}>{4}</p>
                <p>{DateTime}</p>
                <p>Name : ABC Location:Noida Nos of Employees:{projects} Projects Delievered:Link Existing Clients:Link</p>
              </div>
          </div>
      </div>
    </div>
  )
}
export default Dashboard;