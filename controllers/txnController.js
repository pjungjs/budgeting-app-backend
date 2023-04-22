const txn = require('express').Router();
const txnModel = require('../models/txnModel.js');

function returnIndexById(id) {
  const filteredById = txnModel.find(txn => txn.id.toString() === id);
  const indexById = txnModel.indexOf(filteredById);
  return indexById;
}

/*** GET: read ***/
//get all
txn.get('/', (req, res) => {
  res.status(202).json(txnModel);
})

//get by id
txn.get('/:id', (req, res) => {
  const { id } = req.params;
  const index = returnIndexById(id);

  txnModel[index]
  ? res.status(202).json(txnModel[index])
  : res.status(404).redirect('/error')
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
  const index = returnIndexById(id);

  if (txnModel[index]) {
    txnModel[index] = updatedTxn;
    res.status(202).json(updatedTxn);
  } else {
    res.status(404).redirect('/error');
  }
})


/*** DELETE: destroy ***/
txn.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = returnIndexById(id);
  const deletedTxn = txnModel.splice(index, 1);

  deletedTxn
  ? res.status(202).json(deletedTxn)
  : res.status(404).redirect('/error')
})


module.exports = txn;