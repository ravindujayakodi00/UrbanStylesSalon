import { useEffect,useState } from "react";
import * as React from "react";
import {Link} from "react-router-dom";
import { Alert } from "@mui/material";
import { useEmployeesContext } from "../hooks/useEmployeeContext";
import AdminSidebar from "../components/AdminSidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ManageEmployees = () => {

    const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const {employees,dispatch} = useEmployeesContext();
    const[search,setSearch] = useState("");

    useEffect(() => {
        const  fetchEmployees = async () => {
            const response = await fetch('/api/employees')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }
        fetchEmployees()
    },[dispatch])
    
    
    return (
        <div className="ml-20 mt-5">
            <Link className="btn btn-dark addnew" to='/addnewemployee'>Add New Employee</Link>
            <AdminSidebar/>
            <div className="employeeDetails">
                <input className="searchTerm" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Position</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees && employees.filter((employee) => {
                        if(search === ""){
                            return employee;
                    }else if(employee.employeeName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                        
                        ){
                        return employee;
                    }
                })  
                    .map((employee) => (

                        <tr key={employee._id}>
                            <td>{employee.empCode}</td>
                            <td>{employee.firstName + employee.lastName}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
                            
                            <td><Link className="btn btn-dark" to={`/updateemployee/${employee._id}`}>Update</Link></td>

                            <td><button onClick={handleClickOpen} className="btn btn-danger">Delete</button></td>

<div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Are you sure?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <Alert severity="error">
                      {" "}
                      Are you sure to Delete{" "}
                    </Alert>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancal</Button>
                  <Button onClick={async ()=> {
                                const response = await fetch(`/api/employees/${employee._id}`,{
                                    method: 'DELETE'
                                })
                                const json = await response.json()
                        
                                if (response.ok) {
                                    dispatch({type: 'DELETE_PRODUCT', payload: json})
                                    handleClose();

                                }
                            }}>Delete</Button>
                </DialogActions>
              </Dialog>
            </div>
                        </tr>

                            ))}
                    </tbody>
                </table>        
        </div>
       
        </div>
        );
}
 
export default ManageEmployees;