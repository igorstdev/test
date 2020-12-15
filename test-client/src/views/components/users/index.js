import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getUsersAction } from './slice/usersAction';

export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector( state => state);
  
  console.log(user);
  
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);
  
  return (
    <>
      <div className="main-content">
        <div className="container">
      <div className="table-main white fixed-layout mb-10">
        <table>
          <thead>
          <tr>
            <th width="20%">Name, Surname</th>
            <th width="20%">Email</th>
            <th width="20%">Location</th>
            <th width="20%">Status</th>
            <th width="20%">Actions</th>
          </tr>
          </thead>
          <tbody>
          <UserRow/>
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  );
  
  
  function UserRow(user) {
    return (
      <>
        <tr>
          <td><a href="https://www.google.com/"> </a></td>
          <td className="ellipsis"> </td>
          <td> </td>
          <td> </td>
          <td>
            <ul className="actions">
              <li>
                <a href="https://www.google.com/"><i className="icon-edit"> </i></a>
                <button className="btn-icon delete"><i className="icon-close-small"> </i></button>
              </li>
            </ul>
          </td>
        </tr>
      </>
    );
  }
}



