import icon from '../assets/nav.png'
export default function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#0e3065' }}>
                <div className="container-fluid">                   
                    <img src={icon} style={{width:25,height:25}} alt="" />
                    <button className="navbar-toggler" type="button" style={{color:'white'}} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"  ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto ">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-white">Weather</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-white">Forecast</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
           
        </div>
    )
}
