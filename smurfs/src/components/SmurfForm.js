import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf)
}

const handleChanges = e => {
    setNewSmurf({
        ...newSmurf, [e.target.name]: e.target.value
    })

} 
    return(
        <div>
             <form>
                <input name ='name' type ='text' placeholder ='name' onChange={handleChanges}>

                </input>
                <input name ='age' type ='text' placeholder ='name' onChange={handleChanges}
                ></input>
                <input name ='height' type ='text' placeholder ='name' onChange={handleChanges}>

                </input>
                <button type = 'submit' onClick ={handleSubmit}>Add Smurf</button>
            </form>
            </div>
    )



}  

//  const MapStateToProps = state => ({
//      smurfs: state.smurfs
//  })

 export default connect(null, { addSmurf })(SmurfForm)