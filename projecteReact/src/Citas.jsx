import  React  from 'react';
import './citas.css';
import Cita from "./Cita";
import Cita2 from "./Cita2";
import {  useSelector } from "react-redux";

export default function Citas() { 
    const { page } = useSelector((state) => state.citas);
    
    return (
        <>
            {page === 0 ? <Cita key={"cita1"} /> : <Cita2 key={"cita2"}/>}
        </>
    );
}