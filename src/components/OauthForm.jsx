import React from 'react';

const OauthForm = () => {
  return (
  <div className="col-xs-12 col-md-3 col-lg-3">

  <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">url</span>
  <input type="text" className="form-control" placeholder="url" aria-describedby="basic-addon1" />
  </div>

  <br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">key</span>
   <input type="text" className="form-control" placeholder="key" aria-describedby="basic-addon1" />
  </div>
<br />
    <div className="input-group">
  <span className="input-group-addon" id="basic-addon1">secret</span>
     <input type="text" className="form-control" placeholder="secret" aria-describedby="basic-addon1" />
  </div>
  <br />
  <div className="text-center">
  <button type="button" className="btn btn-success" >Execute</button>
  </div>
  </div>

  );
};

export default OauthForm;
