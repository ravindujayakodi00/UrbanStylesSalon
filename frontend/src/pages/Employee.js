import { useEmployeesContext } from "../hooks/useEmployeesContext";
import { useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AllEmployees = () => {

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
        <section>
        <div className="All">
            <Navbar/>
            <input className="searchTerm" type="text" placeholder="Search Employees..." onChange={(e) => setSearch(e.target.value)}/>                       
            <div className="container-fluid">

            <div className="row ">   
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
                
            <div key={employee._id} className="card col-lg-4 col-md-6">
                <Link className="cardLink" to={`/moredetails/${employee._id}`}>
                      
                
                <img src={employee.imageLink} alt="employeeImage" width="200px" height="200px"/>
                <div className="card-body">
                <hr />

                <h5 className="card-title">{employee.employeeName}</h5>
                <p className="card-text">LKR {employee.price}</p>
                </div>
                </Link> 
            </div>
           
                ))}
            </div>
            </div> 
        </div>
        </section>
    );
}
 
export default AllEmployees;