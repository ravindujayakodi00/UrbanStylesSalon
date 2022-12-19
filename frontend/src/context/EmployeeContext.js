import { createContext } from "react";
import { useReducer } from "react";

export const EmployeesContext = createContext();

export const employeesReducer = (state, action) => {
    switch (action.type) {
        // set employees
        case "SET_EMPLOYEES":
            return {
                ...state,
                employees: action.payload,
            }
        //set a single employee
        case "SET_EMPLOYEE":
            return {
                ...state,
                employees: action.payload,
            }

        case 'CREATE_EMPLOYEE':
            return {
                employees: [action.payload, ...state.employees]
            } 
        case 'DELETE_EMPLOYEE':
            return {
                employees: state.employees.filter((employee) => employee._id !== action.payload._id)
            }
        case 'UPDATE_EMPLOYEE':
            return {
                employees: state.employees.map((employee) => employee._id === action.payload._id ? action.payload : employee)
            }    
        default:
            return state;       
    }
}

export const EmployeesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeesReducer, {
        employees: null
    })

    return (
        <EmployeesContext.Provider value={{...state, dispatch}}>
            { children }
        </EmployeesContext.Provider>
    )
}
   