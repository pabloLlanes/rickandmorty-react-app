import { Navigate } from "react-router-dom";

export const RutaProtegida = ({ isAllow, children }) => {


    if (isAllow !== true) {

        return <Navigate to='/home' />

    }



    return children;
} 
