import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand mx-3" to="/">NewsGorilla</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            
                            <li className="nav-item"><Link className="nav-link mx-2" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link mx-2" to="/technology">Technology</Link></li>
                                
                            
                        </ul>
                        
                        
                    </div>
                </nav>
            </div>
        )
    }
}
