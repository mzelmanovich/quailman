const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

const get = function get({url, authorization}){
  const base64 = new Buffer(authorization.access_token).toString('base64');
  const requestOptions = {
    url,
    headers: {
      Authorization: `${authorization.type.toUpperCase()} ${base64}`
    },
    method: 'GET'
  };
  return request(requestOptions)
	.then(({body}) => JSON.parse(body));
};

router.post('/get', (req, res) => {
  get(req.body).then(({body}) => {
    return res.json(body);
  })
  .catch(err => res.json({err: err}));
});

router.get('/get/function', (req, res) => {
  return res.json({func: get.toString()});
});


module.exports = router;
