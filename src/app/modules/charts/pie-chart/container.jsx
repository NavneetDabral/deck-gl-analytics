import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = state => ({ data:state.appreducer.data.name });
const mapDispatchToProps = dispatch => ({  });
export default connect(mapStateToProps,mapDispatchToProps)(Component);