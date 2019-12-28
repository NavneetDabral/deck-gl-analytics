import component from './component';
import {connect} from 'react-redux';

const mapStateToProps =(state) =>({
   
    monthlyDataMapped :state.appreducer.appState.monthlyInfo,  
    loader_flag:state.appreducer.appState.analytics_flag
})


const mapDispatchToProps =(dispatch) =>({
 



})

export default connect(mapStateToProps,mapDispatchToProps)(component);


