import { connect } from 'react-redux';
import Component from './component';
import {fetchData} from './actions';


const mapStateToProps = state => ({ data:state.appreducer.data.name });
const mapDispatchToProps = dispatch => ({ 
 
    fetchDataMapped :(data) => dispatch(fetchData(data)) 
     
 });
export default connect(mapStateToProps,mapDispatchToProps)(Component);