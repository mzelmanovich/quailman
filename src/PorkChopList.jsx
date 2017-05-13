import React from 'react';
import PorkChop from './components/PorkChop.jsx';
import {connect} from 'react-redux';
import {addChop, changeType} from './actions/porkchops';
const PorkChopList = ({porkchops, addChop, typeChange}) => {
  return (
  <div>
  <div className="row">
    {porkchops.map((chop, index) => (<PorkChop index={index} key={index} chop={chop} selector={typeChange} />))}
     </div>
    <div className="row">
   <button type="button" className="btn btn-success" onClick={addChop}>Add Chop</button>
   </div>
  </div>);
};

const mapStateToProps = ({porkchops}) => ({porkchops});
const mapDispatchToProps = (dispatch) => ({
  addChop: (event) => {
    event.preventDefault();
    dispatch(addChop());
  },
  typeChange: (index, type) => (event) => {
    event.preventDefault();
    dispatch(changeType(index, type));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PorkChopList);
