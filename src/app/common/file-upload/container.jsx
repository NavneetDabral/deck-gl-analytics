import component from './component';
import {connect} from 'react-redux';
import {addNoOfColumn,fetchLocations} from './actions';

const mapStateToProps =(state) =>({
    

})


const mapDispatchToProps =(dispatch) =>({
 
    addNoOfColumnMapped:(data) =>dispatch(addNoOfColumn(data)),
    fetchLocationsMapped:()=> dispatch((fetchLocations()))


})

export default connect(mapStateToProps,mapDispatchToProps)(component);


