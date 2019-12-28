import {connect} from 'react-redux';
import Component from './component';



const mapStateToProps =(state)=>({
   dataMapped :state.appreducer.appState.userInfo.location_data
});


export default connect(mapStateToProps,null)(Component);


