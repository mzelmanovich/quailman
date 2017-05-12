const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

const oauth = function oauth({url, key, secret}){
  const base64 = new Buffer(`${key}:${secret}`).toString('base64');
  const requestOptions = {
    url,
    headers: {
      Authorization: 'Basic ' + base64
    },
    formData: {
      grant_type: 'client_credentials'
    },
    method: 'post'
  };
  return request(requestOptions)
	.then(({body}) => JSON.parse(body));
};

const basic = function basic({username, password}){
  const base64 = new Buffer(`${username}:${password}`).toString('base64');
  return {token_type: 'basic', access_token: base64};
};

router.post('/oauth', (req, res) => {
  oauth(req.body)
  .then(body => res.json(body))
  .catch(err => res.json({err: err}));
});

router.get('/oauth/function', (req, res) => {
  res.json({func: oauth.toString()});
});

router.post('/basic', (req, res) => {
  res.json(basic(req.body));
});

router.get('/basic', (req, res) => {
  res.json({func: basic.toString()});
});


module.exports = router;
