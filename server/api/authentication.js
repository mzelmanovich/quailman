const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

const oauth = function({url, key, secret}){
	 const requestOptions = {
	 url,
   headers: {
	  Authorization: 'Basic ' + new Buffer(`${key}:${secret}`).toString('base64')
   },
   formData: {grant_type: 'client_credentials'},
   method: 'post'
 };
  return request(requestOptions)
	.then(({body}) => JSON.parse(body));
};

router.post('/oauth', (req, res) => {
  oauth(req.body)
  .then(body => res.json(body))
  .catch(err => res.json({err: err}));
});

router.get('/oauth/function', (req, res) => {
  res.json({func: oauth.toString()});
});

module.exports = router;
