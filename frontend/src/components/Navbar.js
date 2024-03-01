import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    const NavbarStyle = ( { isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
            color:'black',
            marginLeft: '30px',
            fontSize:'20px',
        }
    }

    return (
        <div class='d-flex flex-column'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink style={NavbarStyle} to='/CreateNote'>Create</NavLink>
                <NavLink style={NavbarStyle} to='/Notes'>Notes</NavLink>
                <NavLink style={NavbarStyle} to='/Dustbin'>Dustbin</NavLink>
            </nav>
        </div>
    )
}