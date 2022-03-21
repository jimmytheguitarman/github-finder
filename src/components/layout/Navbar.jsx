import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function Navbar (props){
    const {title} = props;

    return (
        <nav className="navbar mb12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl"/>
                    <NavLink to="/" className="text-lg font-bold align-middle">{title}</NavLink>
                </div>    
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <NavLink to="/" className="btn btn-ghost btn-sm rounded-btn">Home</NavLink>
                        <NavLink to="/about" className="btn btn-ghost btn-sm rounded-btn">About</NavLink>
                    </div>                       
                </div>                
            </div>            
        </nav>
    )
};

Navbar.defaultProps = {
    title: "Github Finder"
};

Navbar.propTypes = {
    title: PropTypes.string
};

export default Navbar;