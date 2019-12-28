import component from './component';
import {connect} from 'react-redux';

const mapStateToProps =(state) =>({
   
 locationInfo :state.appreducer.appState.locationInfo,   
 location_status:state.appreducer.appState.location_status
})


const mapDispatchToProps =(dispatch) =>({
 


})

export default connect(mapStateToProps,mapDispatchToProps)(component);


