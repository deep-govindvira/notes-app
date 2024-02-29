import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div class='d-flex flex-column'>
            <nav style={{
                marginLeft:'20px'
            }} class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"  href='/CreateNote'>Create</a>
                <a class="navbar-brand"  href='/Notes'>Notes</a>
            </nav>
        </div>
    )
}

export default Navbar