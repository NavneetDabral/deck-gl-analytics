import component from './component';
import {connect} from 'react-redux';
import {addUserInfo} from './action';

const mapStateToProps =(state) =>({
   
    userDataMapped :state.appreducer.appState   

})


const mapDispatchToProps =(dispatch) =>({
 
addUserInfoMapped :(data) => dispatch(addUserInfo(data))


})

export default connect(mapStateToProps,mapDispatchToProps)(component);


