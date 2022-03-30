const express = require('express');
const router = express.Router();
const {
  getAllTokens,
  deleteToken,
  createToken,
  getTokenById,
  updateToken,
} = require('../controllers/tokenController');

router.get('/', getAllTokens);
router.get('/:id', getTokenById);
router.post('/', createToken);
router.put('/:id', updateToken);
router.delete('/:id', deleteToken);

module.exports = { tokenRoutes: router };
