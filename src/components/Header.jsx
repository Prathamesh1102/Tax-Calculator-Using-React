import React from "react";
import Logo from "../assets/investment-calculator-logo.png";

export default function Header(){
    return <section id="header">
        <img src={ Logo } alt="Logo" />
        <h1 >This is Invesment Calculation App.</h1>
    </section>
}