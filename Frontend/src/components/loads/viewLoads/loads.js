import React, { Component } from 'react';
import axios from 'axios';

class Loads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loads : [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/loads/')
        .then((response) => {
            console.log(response);
            this.setState({loads: response.data.data});
        })
        .catch((error) => {
            console.log(error.message);
        })

        // axios.get(`http://localhost:3000/course/amount/${this.props.match.params.id}`)
        // .then((response) => {
        //     console.log(response);
        //     this.setState({total: response.data.totalAmount});
        // })
        // .catch((error) => {
        //     console.log(error.message);
        // })
    }

    navigateSubjectPage = (e,courseId) => {
        window.location=`/${courseId}`
    }

    render() { 
        console.log(this.state.loads.length);
        return ( 
        <div className="container">
            <h1>Loads</h1>
            {this.state.loads.length > 0 && this.state.loads.map((item,index) =>(
                <div key={index} className="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                    <h3>{item.name}</h3>
                    <h5>{item.code}</h5>
                    <h5>{item.load}</h5>
                    <h5>{item.amountPrKm}</h5>
                </div>
            ))}
        </div>
       );
    }
}
 
export default Loads;