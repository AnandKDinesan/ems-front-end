import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Edit() {
  const [id,setId]=useState('')
  const [empName,setName]=useState('')
  const [emAge,setAge]=useState('')
  const [emDesg,setDesg]=useState('')
  const [emSalary,setSalary]=useState(0)
  //get path parameter from url
  const params =useParams()

  //navigating page 
 const  location=useNavigate()
  // console.log(params.id);
  //api call to get details of a particular employee from server
  const fetchEmployee=async()=>{
    const result = await axios.get('http://localhost:8000/get-an-employee/'+params.id)
    console.log(result.data.employee);
    setName(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesg(result.data.employee.desg)
    setSalary(result.data.employee.salary)
    setId(result.data.employee.id)

  } 
  const handleUpdate= async(e)=>{
    e.preventDefault()
    const body={
      id,
      empName,
      emAge,
      emDesg,
      emSalary
    }
    //api call
    // console.log(body);
    const result =await axios.post('http://localhost:8000/update-employee',body)
    alert(result.data.message);
    location('/')
  }
  useEffect(()=>{
    fetchEmployee()
  },[])


  return (
    <div className='container-fluid mt-3' >
      <h1 className='text-center'>Update Employee Form</h1>
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
       
       {/* form */}
       <div className=' mt-3 container p-2 border border-primary rounded'>
        <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" value={empName}
      onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age" value={emAge}
        onChange={(e)=>setAge(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation" value={emDesg}
       onChange={(e)=>setDesg(e.target.value)}   />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Salary" value={emSalary}
       onChange={(e)=>setSalary(e.target.value)} />
        
      </Form.Group>

     
     
        <Button onClick={(e)=>handleUpdate(e)}  variant="success" type="submit">
          Update
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

export default Edit