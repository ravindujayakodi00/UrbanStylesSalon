import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";

export const useEmployeesContext = () => {
    const context = useContext(EmployeeContext);

    if (!context) {
        throw Error("useProductsContext must be used within a ProductsContextProvider");
    }

    return context;
}
