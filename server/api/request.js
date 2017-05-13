const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);

const get = function get({url, authorization}){
  const requestOptions = {
    url,
    method: 'GET',
    headers: {
      'User-Agent': 'quailman'
    }
  };
  if (authorization){
    requestOptions.headers.Authorization = `${authorization.token_type.toUpperCase()} ${authorization.access_token}`;
  }
  return request(requestOptions)
	.then(resp => {
  return JSON.parse(resp.body);
});
};

const put = function put({url, authorization, body}){
  const requestOptions = {
    url,
    method: 'PUT',
    headers: {
      'User-Agent': 'quailman'
    },
    body: body
  };
  if (authorization){
    requestOptions.headers.Authorization = `${authorization.token_type.toUpperCase()} ${authorization.access_token}`;
  }
  return request(requestOptions)
	.then(resp => {
  return JSON.parse(resp.body);
});
};

const post = function post({url, authorization, body}){
  console.log(body);
  const requestOptions = {
    url,
    method: 'POST',
    headers: {
      'User-Agent': 'quailman'
    },
    body: JSON.stringify(body)
  };
  if (authorization){
    requestOptions.headers.Authorization = `${authorization.token_type.toUpperCase()} ${authorization.access_token}`;
  }
  return request(requestOptions)
	.then(resp => {
  return JSON.parse(resp.body);
});
};


router.post('/get', (req, res) => {
  get(req.body).then((body) => {
    return res.json(body);
  })
  .catch(err => {
    console.log(err);
    res.json({err: err});
  });
});

router.get('/get/function', (req, res) => {
  return res.json({func: get.toString()});
});


router.post('/put', (req, res) => {
  put(req.body).then((body) => {
    return res.json(body);
  })
  .catch(err => res.json({err: err}));
});

router.get('/put/function', (req, res) => {
  return res.json({func: put.toString()});
});

router.post('/post', (req, res) => {
  post(req.body).then((body) => {
    return res.json(body);
  })
  .catch(err => res.json({err: err}));
});

router.get('/post/function', (req, res) => {
  return res.json({func: put.toString()});
});


module.exports = router;
