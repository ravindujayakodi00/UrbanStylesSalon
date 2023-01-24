import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployeesContext } from "../hooks/useEmployeeContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AddNewProduct = () => {

    const {dispatch} = useEmployeesContext();
    const[verify,setVerify] = useState('')
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const[empCode,setEmpCode] = useState('')
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[phone,setPhone] = useState('')
    const[email,setEmail] = useState('')
    const[position,setPosition] = useState('')

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = {empCode,firstName,lastName,phone,email,position}

        const response = await fetch('api/employees',{
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setOpenError(true);

        }
        if(response.ok){
            setEmpCode('')
            setFirstName('')
            setLastName('')
            setPhone('')
            setEmail('')
            setPosition('')
            setError(null)
            console.log('New Product added',json)
            dispatch({type: 'CREATE_EMPLOYEE', payload: json})   
            setOpen(true);
            setVerify("Add Succesful")                                
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenError(false);
      };
    


    return (
        <div>
            <div className="">
            <form className="mx-24 px-24 pt-10 bg-slate-100" onSubmit={handleSubmit}>
                <br />
                <h1 className=' text-center'>Add a New Product</h1>
                <br/>
                <div className="form-group">
                    <label>Employee Code</label>
                    <input 
                    className="form-control"
                    type="text"
                    onChange={(e) => setEmpCode(e.target.value)}
                    value = {empCode}
                    />
                </div>
            
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>First Name</label>
                        <input 
                        className="form-control"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value = {firstName}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name</label>
                        <input 
                        className="form-control"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value = {lastName}
                        />
                    </div>
                    
                </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        className="form-control"
                        type="year"
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email}
                        />
                    </div>
                    <div className="row">
                    <div className="form-group col-md-6">
                        <label>Phone</label>
                        <input 
                        className="form-control"
                        type="year"
                        onChange={(e) => setPhone(e.target.value)}
                        value = {phone}
                        />
                    </div>
                    
                    <div className="form-group col-md-6">
                        <label>Position</label>
                        <input 
                        className="form-control"
                        type="text"
                        onChange={(e) => setPosition(e.target.value)}
                        value = {position}
                        />
                    </div>
                </div>
                
                <br/>
                <div  align="center">
                    <Link to="/admin" className="btn btn-danger addnewbtn">Cancel</Link>
                    <button onClick={handleSubmit} className="addnewbtn btn btn-dark">Add Product</button>
                    <br />
                    <div className="successmsg">
                            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    {verify}
                                </Alert>
                            </Snackbar>
                        
                    </div>
                    
                </div>
                <div>
                {error && 
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>
                    }
                </div>       
                <br/>
                <br />  
            </form>
            </div>
        </div>
       
    );
}
 
export default AddNewProduct;