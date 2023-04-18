const txn = require('express').Router();
const txnModel = require('../models/txnModel.js');

/*** GET: read ***/
//get all
txn.get('/', (req, res) => {
  res.status(202).json(txnModel);
})

//get by id
txn.get('/:id', (req, res) => {
  const { id } = req.params;
  if (txnModel[id]) {
    res.status(202).json(txnModel[id]);
  } else {
    res.status(404).redirect('/error');
  }
})


/*** POST: create ***/
txn.post('/', (req, res) => {
  const newTxn = req.body;
  txnModel.push(newTxn);
  res.status(202).json(newTxn);
})


/*** PUT: update ***/
txn.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedTxn = req.body;
  if (txnModel[id]) {
    txnModel[id] = updatedTxn;
    res.status(202).json(updatedTxn);
  } else {
    res.status(404).redirect('/error');
  }
})


/*** DELETE: destroy ***/
txn.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedTxn = txnModel.splice(id, 1);

  txnModel[id]
  ? res.status(202).json(deletedTxn)
  : res.status(404).redirect('/error')
})


module.exports = txn;