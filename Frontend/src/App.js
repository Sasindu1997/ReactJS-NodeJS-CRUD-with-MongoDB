import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loads from './components/loads/viewLoads/loads'
import Vehicles from './components/vehicles/viewVehicles/vehicles'
import AddVehicle from './components/vehicles/addVehicles/addVehicle'
import AddLoad from './components/loads/addload/addLoad'

import VehiclesOfLoads from './components/vehicles/loadsOfVehicles/loadsOfVehicles'

function App () {
  return (
        <div>
            <Router>
                <Navbar/>
                <section>
                    <Switch>
                        <Route path="/" component={Loads} exact />
                        <Route path="/vehicles" component={Vehicles} />
                        <Route path="/add-vehicle" component={AddVehicle} />
                        <Route path="/add-load" component={AddLoad} />
                        <Route path="/:id" component={VehiclesOfLoads} />
                    </Switch>
                </section>
            </Router>
        </div>
  )
}
export default App
