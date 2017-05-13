import React from 'react';

const Pannel = ({children, title}) => {
  <div className="panel panel-default">
  <div className="panel-heading">{title}</div>
  <div className="panel-body">
    {this.children}
  </div>
</div>;
};

export default Pannel;
