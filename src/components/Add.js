import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';

function Add() {
  const [id,setId]=useState('')
  const [empName,setName]=useState('')
  const [emAge,setAge]=useState('')
  const [emDesg,setDesg]=useState('')
  const [emSalary,setSalary]=useState(0)
  let location=useNavigate()
  useEffect(()=>{
    //generating unique id
    setId(uuid().slice(0,3));
  },[])
  const handleAddEmployee= async(e) =>{
    //to prevent refresh of page
    e.preventDefault()
    // let uniqueId=uuid()
    
    //creating body to share with backend
    const body={
      id,
      empName,
      emAge,
      emDesg,
      emSalary
    }
    console.log(body);
//api call
    const result =await axios.post('http://localhost:8000/add-employee',body)
    alert(result.data.message);
    location('/')
    


  }
  
  return (
    <div className='container-fluid mt-3'>
      <h1 className='text-center'>Add New Employee</h1>
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
        <div className=' mt-3 container p-2 border border-primary rounded'>
        <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name"
        onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age"
        onChange={(e)=>setAge(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation"
        onChange={(e)=>setDesg(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Salary"
        onChange={(e)=>setSalary(e.target.value)} />
        
      </Form.Group>

     
     
        <Button onClick={(e)=>handleAddEmployee(e)} variant="success" type="submit">
          Add
        </Button>
    
      <Link to={'/'}>
      <Button className='ms-2' variant="warning" type="submit">
        Close
      </Button></Link>
      
    </Form>
        </div>
    </div>
  )
}

export default Add