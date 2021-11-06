import React, { Component } from 'react';
import axios from 'axios';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles : [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/vehicles/')
        .then((response) => {
            console.log(response);
            this.setState({vehicles: response.data.data});
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    navigateSubjectPage = (e,courseId) => {
        window.location=`/${courseId}`
    }

    render() { 
        console.log(this.state.vehicles.length);
        return ( 
        <div className="container">
            <h1>Vehicles</h1>
            {this.state.vehicles.length > 0 && this.state.vehicles.map((item,index) =>(
                <div key={index} className="card mb-1" onClick={e => this.navigateSubjectPage(e, item._id)}>
                    <h3>{item.name}</h3>
                    <h5>{item.vehicleType}</h5>
                    <h5>{item.description}</h5>
                </div>
            ))}
        </div>
       );
    }
}
 
export default Vehicles;