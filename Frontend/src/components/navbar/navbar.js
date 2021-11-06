import React, { Component } from 'react';

class navbar extends Component {
    constructor(props) {
        super(props);
    }

    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> ABC delivery service</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Loads</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/vehicles">Vehicles</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/add-vehicle">Add vehicle</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/add-load">Add load</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default navbar;