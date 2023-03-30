import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { Link } from 'react-router-dom';
function Admin() {
  const [allEmployees, setAllEmployee] = useState([])
  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/get-all-employees')
    console.log(result.data.employees);
    setAllEmployee(result.data.employees)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(allEmployees);

  const handeleDelete =async(id)=>{
    const result= await axios.delete('http://localhost:8000/delete-employee/'+id)
    alert(result.data.message);
    fetchData()
  }
  return (
    <div>
      <div className='container-fluid mt-5'>
        <h1>
          {""} 
          <i class="fa-solid fa-user-group me-2"></i> Employee Management App
          <Link to={"/add"}> <a className='btn btn-success ms-5'><i class="fa-solid fa-user-plus"></i>Add Employee</a>
          </Link>

        {""}
        </h1>
        <p style={{ textAlign: 'justify' }}>
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
          this is dummy data: this is dummy data: this is dummy data: this is dummy data:
        </p>
      </div>
      {/* Table */}
      <div className='container mt-2 mb-2'>
        <h1 className='text-primary mb-2'>Employee Details</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allEmployees?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.uname}</td>
                  <td>{item.age}</td>
                  <td>{item.desg}</td>
                  <td>{item.salary}</td>
                  <td>
                    <Link to={'edit/'+item.id}><button className='btn btn-warning me-3'><i class="fa-solid fa-pen"></i></button></Link >
                    <button className='btn btn-danger' onClick={()=>handeleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                  </td>

                </tr>
              ))
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Admin