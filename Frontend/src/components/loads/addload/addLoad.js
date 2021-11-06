import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    name : '',
    code : '',
    load : '',
    amountPrKm : '',
    vehicles : [],
    options : [],
    selectedVehicles : []
    
}
class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    componentDidMount(){
        axios.get('http://localhost:3000/vehicles/')
        .then((response) => {
            console.log(response);
            this.setState({vehicles: response.data.data}, () => {
                let data = [];
                this.state.vehicles.map((item, index) =>{
                    let vehicles = {
                        value: item._id,
                        label: item.name
                    }
                    data.push(vehicles);
                });
                this.setState({options: data});
            });
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    onVehicleSelect = (e) => {
        this.setState({selectedVehicles : e ? e.map(item => item.value) : []})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let load = {
            name : this.state.name,
            code : this.state.code,
            load : this.state.load,
            amountPrKm : this.state.amountPrKm,
            vehicles : this.state.selectedVehicles,
        }

        console.log(load); 

        axios.post('http://localhost:3000/loads/create', load)
        .then((response) => {
            console.log(response);
            alert('load created');
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    render() { 

        return ( 
        <div className="container">
            <h1>Add Load</h1>
            <form onSubmit={this.onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="code" className="form-label">code</label>
                <input type="text" className="form-control" id="code" name="code" value={this.state.code} onChange={this.onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor  ="load" className="form-label">load</label>
                <input type="text" className="form-control" id="load" name="load" value={this.state.load} onChange={this.onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="amountPrKm" className="form-label">Amount Per Km</label>
                <input type="number" className="form-control" id="amountPrKm" name="amountPrKm" value={this.state.amountPrKm} onChange={this.onChange} />
            </div>
            <div className="mb-3">
            <label htmlFor="vehicle type" className="form-label">vehicle type</label>
               <Select
               options={this.state.options}
               onChange={this.onVehicleSelect}
               isMulti
               className="basic-multi-select"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
       );
    }
}
 
export default CreateCourse;