import React from "react";

const Login = () => {
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-4 ">
          <div className="">
            <div className="container login-container">
              <div className="card my-10">
                <div className="card-body">
                    <h1 className="text-center"><strong>Welcome to Kalpsaru Diamonds</strong></h1>
                    <label className="mx-3" for="email">Email</label><br></br>
                    <input className="form-control field mx-3" id="email" placeholder="Enter your Email"/>
                    <label className="mx-3" for="password">Password</label><br></br>
                    <input className="form-control field mx-3"  id="password"placeholder="Enter your Password"/><br></br>
                    <div className="text-center">
                        <button > SUBMIT</button>
                    </div><br></br>
                    
                    <div>
                        <p className="text-center">New to Kalpsaru?<span> SignUp</span></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
