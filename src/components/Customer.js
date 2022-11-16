import React from "react";

const Customer = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-3 sidebar ">
            <h3 className="logo">KD Kalpsaru Diamonds</h3>
            <hr></hr>
            <div className="d-flex my-2">
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/settings2-512.png"
                className="sidebaricons img-fluid"
              ></img>
              <p className="sidebarnames">Master</p>
              <div className="">
                <img
                  className="dropdown img-fluid "
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-256.png"
                ></img>
              </div>
            </div>
            <div>
              <input
                className="form-control ifieldcustom"
                placeholder="Customer Account"
              ></input>
            </div>
            <div className="d-flex my-2">
              <img
                src="https://cdn1.iconfinder.com/data/icons/trading-line-2/123/Briefcase__Bag__business__case__office__porfolio__pouch-256.png"
                className="sidebaricons"
              ></img>
              <p className="sidebarnames">Trading</p>
              <img
                className="dropdown"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-256.png"
              ></img>
            </div>
            <div className="d-flex my-2">
              <img
                src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami3-79-128.png"
                className="sidebaricons"
              ></img>
              <p className="sidebarnames ">Manufacturing</p>
              <img
                className="dropdownm"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-256.png"
              ></img>
            </div>
            <div className="d-flex my-2">
              <img
                src="https://cdn1.iconfinder.com/data/icons/e-commerce-update-1/42/descendng_chart-256.png"
                className="sidebaricons"
              ></img>
              <p className="sidebarnames ">Finance</p>
            </div>
            <div className="d-flex my-2">
              <img
                src="https://cdn2.iconfinder.com/data/icons/education-582/64/Score-examination-result-report-checklist-256.png"
                className="sidebaricons"
              ></img>
              <p className="sidebarnames ">Report</p>
            </div>
            <div className="d-flex my-2">
              <img
                src="https://cdn2.iconfinder.com/data/icons/education-582/64/Score-examination-result-report-checklist-256.png"
                className="sidebaricons"
              ></img>
              <p className="sidebarnames ">Report Single</p>
            </div>
            <hr></hr>
            <div className="text-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/Prev-256.png"
                className="lefticon"
              ></img>
            </div>
          </div>
          <div className="col-sm-9">
            <nav class="navbar bg-light mx-0">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="searchicon"
                    src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png"
                  ></img>
                  <div className="d-flex">
                    <img
                      className="usericon"
                      src="https://cdn0.iconfinder.com/data/icons/ecommerce-essential-material-1/32/Artboard_16-128.png"
                    ></img>
                    <img
                      className="downarrow"
                      src="https://cdn0.iconfinder.com/data/icons/simple-arrow-set-for-the-minimalist/100/arrows-13-128.png"
                    ></img>
                  </div>
                </form>
              </div>
            </nav>
            <div className="my-2">
              <h3>
                <strong>Master</strong> Customer Account
              </h3>
            </div>
            <div className="card">
              <div className="card-header">
                <span className="text-primary"><strong>Customer Account (New)</strong></span>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="">Account Name*</p>
                  <input
                    className="form-control custinput"
                    placeholder="Enter Account Name"
                  />
                  <p>Alias</p>
                  <input
                    className="form-control custinput"
                    placeholder="Alias"
                  />
                  <p className="mx-3">Annexure</p>
                  <div class="input-group mb-3">
                    <select class="form-select " id="inputGroupSelect02">
                      <option selected>Sundry Debtors</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="d-flex">
                  <label class="form-check-label " for="inlineCheckbox1">
                    Inactive
                  </label>
                  <div class="form-check form-check-inline mx-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <label class="form-check-label mx-5" for="inlineCheckbox2">
                    Internal
                  </label>
                  <div class="form-check form-check-inline mx-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                  </div>
                  <label class="form-check-label mx-5" for="inlineCheckbox3">
                    KYC
                  </label>
                  <div class="form-check form-check-inline mx-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex my-3 ">
              <button className="btn btn-primary ">Company</button>
              <button className="btn btn-primary ">Contact Details</button>
              <button className="btn btn-primary ">Contact Person</button>
              <button className="btn btn-primary ">Tax</button>
              <button className="btn btn-primary ">Other</button>
              <button className="btn btn-primary ">Reference</button>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">RelatedA/C</p>
                  </div>
                  <div class="input-group mb-3 col">
                    <input
                      className="form-control custominput "
                      placeholder="Enter A/C Number"
                      id="inputGroupSelect02"
                    />
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">Country</p>
                  </div>
                  <div class="input-group mb-3 col">
                    <input
                      className="form-control custominput "
                      placeholder="Enter Country Name"
                      id="inputGroupSelect02"
                    />
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">State</p>
                  </div>
                  <div class="input-group mb-3 col">
                    <input
                      className="form-control custominput "
                      placeholder="Enter State Name"
                      id="inputGroupSelect02"
                    />
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">City</p>
                  </div>
                  <div class="input-group mb-3 col">
                    <input
                      className="form-control custominput "
                      placeholder="Enter City Name"
                      id="inputGroupSelect02"
                    />
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">Type</p>
                  </div>
                  <div class="input-group mb-3 col">
                  <select class="form-select " id="inputGroupSelect02">
                      <option selected>A2</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex">
                    <p className="accountdetails">Debit Limit(Rs)</p>
                  </div>
                  <div class="input-group mb-3 col">
                    <input
                      className="form-control custominput "
                      placeholder="Enter Debit Limit"
                      id="inputGroupSelect02"
                    />
                    <label class="input-group-text" for="inputGroupSelect02">
                      +
                    </label>
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

export default Customer;
