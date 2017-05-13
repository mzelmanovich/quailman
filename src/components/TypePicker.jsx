import React from 'react';

const TypePicker = ({index, selector}) => {
  return (
      <div className="col-xs-12 col-md-12col-lg-12 text-center">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{`Pork Chop Type `}<span className="caret" /></button>
          <ul className="dropdown-menu">
            <li className="dropdown-header">Authentications</li>
            <li><a href="#" onClick={selector(index, 'Oauth')}>OAuth</a></li>
            <li><a href="#" onClick={selector(index, 'Basic')}>Basic</a></li>
            <li className="divider" />
            <li className="dropdown-header">Requests</li>
            <li><a href="#" onClick={selector(index, 'Get')}>Get</a></li>
          </ul>
        </div>
      </div>
  );
};

export default TypePicker;
