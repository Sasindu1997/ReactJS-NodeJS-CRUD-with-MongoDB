import React, { Component } from 'react';
import axios from 'axios';

class VehiclesOfLoads extends Component {
    state = { 
        loads : [],
        total : ''
     }

    componentDidMount(){
        axios.get(`http://localhost:3000/vehicles/${this.props.match.params.id}`)
        .then((response) => {
            console.log(response);
            this.setState({loads: response.data.loads});
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    render() {
        return ( 
            <div>
                <h1>loads</h1>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item,index) =>(
                <div key={index} className="card mb-3">
                    <h5>{item.name}</h5>
                </div>
            ))}
            </div>
         );
    }
}
 
export default VehiclesOfLoads;