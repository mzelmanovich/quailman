const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

const get = function get({url, authorization}){
  const requestOptions = {
    url,
    method: 'GET'
  };
  if (authorization){
    requestOptions.headers = {Authorization: `${authorization.token_type.toUpperCase()} ${authorization.access_token}`};
  }
  console.log(requestOptions);
  return request(requestOptions)
	.then(resp => JSON.parse(resp.body));
};

router.post('/get', (req, res) => {
  get(req.body).then((body) => {
    return res.json(body);
  })
  .catch(err => res.json({err: err}));
});

router.get('/get/function', (req, res) => {
  return res.json({func: get.toString()});
});


module.exports = router;
