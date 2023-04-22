import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CrudApp = () => {
  const [department, setDepartment] = useState([]);

  const getAllDepartment = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/department/getDep`
      );

      if (data?.success) {
        setDepartment(data.department);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong Update product:  ${error}`);
    }
  };

  useEffect(() => {
    getAllDepartment();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>CRUD Operation</h3>
            <button className="btn btn-primary btn-sm float-end">
              Create Department
            </button>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Department Code</th>
                  <th>Department Name</th>
                  <th>Department Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {console.log(department)}
                {department?.map((item, i) => {
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.depcode}</td>
                      <td>{item.depname}</td>
                      <td>{item.location}</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-3">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudApp;
