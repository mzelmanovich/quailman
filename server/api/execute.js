const router = require('express').Router();
let request = require('request');
const bluebird = require('bluebird');
request = bluebird.promisify(request);


router.post('/function', (req, res) => {
  let {func, input} = req.body;
  let evalProm = new Promise((resolve, reject) => {
    try {
      let fwdfsadfsafasd;
      eval('fwdfsadfsafasd =' + func);
      resolve(fwdfsadfsafasd);
    }
    catch (err){
      console.log(err);
      reject(err);
    }
  });
  evalProm.then((evalFunc) => {
    return evalFunc(input);
  })
  .then(output => res.json(output))
  .catch(err => res.json({err: err}));
});

module.exports = router;
