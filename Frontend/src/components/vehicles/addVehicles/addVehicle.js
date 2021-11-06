import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    name : '',
    vehicleType : '',
    description : '',
    loads : [],
    options : [],
    selectedLoads : [],
    
}
class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    componentDidMount(){
        axios.get('http://localhost:3000/loads/')
        .then((response) => {
            console.log(response);
            this.setState({loads: response.data.data}, () => {
                let data = [];
                this.state.loads.map((item, index) =>{
                    let loads = {
                        value: item._id,
                        label: item.name
                    }
                    data.push(loads);
                });
                this.setState({options: data});
            });
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    onLoadSelect = (e) => {
        this.setState({selectedLoads : e ? e.map(item => item.value) : []})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let load = {
            name : this.state.name,
            vehicleType : this.state.vehicleType,
            description : this.state.description,
            loads : this.state.selectedLoads,
        }
        console.log(load); 

        axios.post('http://localhost:3000/vehicles/create', load)
        .then((response) => {
            console.log(response);
            alert('vehicle created');
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    render() { 

        return ( 
        <div className="container">
            <h1>Add Vehicle</h1>
            <form onSubmit={this.onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Vehicle name</label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor  ="vehicleType" className="form-label">vehicleType</label>
                <input type="text" className="form-control" id="vehicleType" name="vehicleType" value={this.state.vehicleType} onChange={this.onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor  ="description" className="form-label">description</label>
                <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.onChange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="load type" className="form-label">load type</label>
               <Select
               options={this.state.options}
               onChange={this.onLoadSelect}
               isMulti
               className="basic-multi-select"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
       );
    }
}
 
export default AddVehicle;