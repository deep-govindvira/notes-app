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
                <NavLink style={NavbarStyle} to='/'>
                    <img style={{
                        marginRight:'10px'
                    }} src='/house.png' width={'30px'} height={'30px'}></img>
                    Home
                    </NavLink>
                <NavLink style={NavbarStyle} to='/CreateNote'>
                    <img style={{
                        marginRight:'9px'
                    }} src='/plus.png' width={'30px'} height={'30px'}></img>
                    Create
                    </NavLink>
                <NavLink style={NavbarStyle} to='/Notes'>
                    <img style={{
                        marginRight:'9px'
                    }} src='/notebook.png' width={'30px'} height={'30px'}></img>
                    Notes
                </NavLink>
                <NavLink style={NavbarStyle} to='/Dustbin'>
                    <img style={{
                        marginRight:'6px'
                    }} src='/dustbin.png' width={'30px'} height={'30px'}></img>
                    Dustbin
                </NavLink>
            </nav>
        </div>
    )
}
