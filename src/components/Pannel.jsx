import React from 'react';

const Pannel = ({children, title}) => {
  return (
<div className="panel panel-default">
  <div className="panel-heading">{title}</div>
  <div className="panel-body" style={{height: '500px'}}>
    {children}
  </div>
</div>);
};

export default Pannel;
