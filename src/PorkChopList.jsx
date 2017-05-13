import React from 'react';
import PorkChop from './components/PorkChop.jsx';
import {connect} from 'react-redux';
const PorkChopList = ({porkchops}) => {
  return ( <div className="row">
    {porkchops.map((chop, index) => (<PorkChop index={index} key={index} />))}
  </div>);
};

const mapStateToProps = ({porkchops}) => ({porkchops});

export default connect(mapStateToProps, null)(PorkChopList);
