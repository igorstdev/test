import React from 'react';

export default function User() {
  return (
    <div className="main-content">
      <div className="container md pt-10">
        <div className="card shadow mb-5">
          <form action="">
            <div className="card-header">
              <h2 className="header-title">Profile</h2>
            </div>
            <div className="card-body">
              <ul className="cols-sm-2">
                <li className="col">
                  <label className="field-label">Name</label>
                  <div className="text-field bordered">
                    <input type="text"/>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Email</label>
                  <div className="text-field bordered">
                    <input type="email"/>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Username</label>
                  <div className="text-field bordered">
                    <input type="text"/>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Password</label>
                  <div className="text-field bordered">
                    <input type="password"/>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Gender</label>
                  <div className="text-field bordered">
                    <select>
                      <option hidden disabled selected value></option>
                      <option value="0">Male</option>
                      <option value="1">Female</option>
                    </select>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Birthday</label>
                  <div className="text-field bordered">
                    <input type="date" value="2019-01-01"/>
                  </div>
                </li>
                <li className="col">
                  <label className="field-label">Website</label>
                  <div className="text-field bordered">
                    <input type="text"/>
                  </div>
                </li>
              </ul>
              <div>
                <label className="field-label">Biography</label>
                <div className="text-field bordered">
                  <textarea rows="5"> </textarea>
                </div>
              </div>
            </div>
            <div className="card-footer text-right">
              <input type="reset" value="Reset" className="btn link secondary w-lg mr-2"/>
              <button className="btn filled primary w-lg">save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}