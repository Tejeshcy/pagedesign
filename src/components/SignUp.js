import React from "react";

const SignUp = () => {
  return (
    <div className="container-fluid signup-container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 body ">
          <div className="card ">
            <div className="card-body">
              <h3 >Registration Page</h3>
              <label for="name">Name</label>
              <input className="form-control my-2" id="name" placeholder="First Name"></input>
              <label for="email">Email ID</label>
              <input className="form-control my-2" id="name" placeholder="Email ID"></input>
              <label for="password">Password</label>
              <input className="form-control my-2" id="password" placeholder="Password"></input>
              <label for="cpassword">Confirm Password</label>
              <input className="form-control my-2" id="cpassword" placeholder="Confirm Password"></input>
            </div>
            <div >
                <p className="right mx-2" ><span className="">Back To Login Page</span></p>
            </div>
            <div className= "text-center my-2">
                <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
