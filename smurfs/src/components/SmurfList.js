import React from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../actions'
import  Smurf  from './Smurf'


const SmurfList = props => {
     
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    }

    return(
        <>
        <button onClick ={fetchSmurf}>Fetch Smurf</button>
        <Smurf smurfs ={props.smurfs}/> 
        </>
    )
}

const mapStateToProps = state => ({
   
  smurfs: state.smurfs 
})

export default connect(mapStateToProps, { getSmurf })(SmurfList)