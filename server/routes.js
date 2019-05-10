const express = require('express');
const router = express.Router();
let someData = null;

router.post('/hero', (req, res) => {
  console.log(req.body);
  someData = req.body;
  //res.(222);
});

router.get('/heroes', (req, res) => {
  let arr = [];
  arr.push({
    id: 221,
    name: 'Big Hero 6',
    saying: 'fa la la la la (from node server)'
  });
  if(someData !== null) {
    arr.push(someData);
  }
  res.send(arr);
});

router.get('/badguys', (req, res) => {
  res.send([
    {
      id: 41,
      name: 'Bad Guy',
      saying: 'bwahahahaha (from node server)'
    }
  ]);
});

module.exports = router;
