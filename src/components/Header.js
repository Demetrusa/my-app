import react from "react";
import Button from "./Button";
import './Header.css';
import NavbarUl from "./NavbarUl";


const Header  = () => {

    return (
        <div className="header">
            <h1>Hotel Royal</h1>
            <NavbarUl />
            <Button />
        </div> 
    )
}


export default Header;