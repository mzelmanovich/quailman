const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

router.post('/oauth', (req, res) => {
  const {url, key, secret} = req.body;
  const requestOptions = {
	 url,
    headers: {
	  Authorization: 'Basic ' + new Buffer(`${key}:${secret}`).toString('base64')
    },
    formData: {grant_type: 'client_credentials'},
    method: 'post'
  };
  request(requestOptions)
  .then(({body}) => res.json(JSON.parse(body)))
  .catch(err => res.json({err: err}));
});

module.exports = router;
