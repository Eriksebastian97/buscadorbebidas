import { useContext } from "react";
import BebidasContext from "../context/CategoriaProvider";


const useBebidas = ()=>{
    return useContext(BebidasContext)
}

export default useBebidas