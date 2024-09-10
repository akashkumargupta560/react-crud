import { Link, useNavigate } from "react-router-dom"
export function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
                   <img src="logo.png" width='50' className="me-2" style={{borderRadius:'5px'}}/> Best Store
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light gap-3" style={{cursor:'pointer'}}>
                        {/* <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item" onClick={()=>navigate("/")}>
                            Home
                        </li>
                        <li className="nav-item" onClick={()=>navigate("/contact")}>
                            Contact us
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul className="dropdown-menu">
                                {/* <li onClick={()=>navigate("/admin/products")}><a class="dropdown-item">Products</a></li> */}
                                <li onClick={()=>navigate("/admin/products")}><a className="dropdown-item" style={{cursor:'pointer'}}>Products</a></li>
                                <li onClick={()=>navigate("/profile")}><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li onClick={()=>navigate("/logout")}><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export function Footer(){

    return(
        <div className="text-center p-4 border-top ">
            <img src="logo.png" alt="..." width='30' className="me-2" />
            Best Store
        </div>
    )
}