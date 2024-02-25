
export default function Header() {

    return (
        <div>
            <div className="container-flex" style={{ backgroundColor: '#0e3065' }}>
                <header className="d-flex flex-wrap justify-content-center py-2  border-bottom" >
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">                      
                   
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white">Weather</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white">Forcast</a></li>                      
                        <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}
