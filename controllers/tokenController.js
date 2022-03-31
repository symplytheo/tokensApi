const { Token } = require('../models/tokenModel');
const errorController = require('./errorController');

exports.getAllTokens = async (req, res) => {
  try {
    const { fields } = req.query;
    const query = fields ? fields.split(',').join(' ') : fields;
    const tokens = await Token.find({}, query);
    return res.status(200).json({
      success: true,
      query,
      data: tokens,
    });
  } catch (error) {
    errorController(error, res, 'token');
  }
};

exports.getTokenById = async (req, res) => {
  try {
    const { id } = req.params;
    const token = await Token.findById(id);
    return res.status(200).json({
      success: true,
      data: token,
    });
  } catch (error) {
    errorController(error, res, 'token');
  }
};

exports.createToken = async (req, res) => {
  try {
    const { name, currency, icon } = req.body;
    const token = await Token.create({ name, currency, icon });
    return res.status(200).json({
      success: true,
      data: token,
    });
  } catch (error) {
    errorController(error, res, 'token');
  }
};

exports.updateToken = async (req, res) => {
  try {
    const { name, currency, icon } = req.body;
    const { id } = req.params;
    const options = { new: true, runValidators: true };
    const token = await Token.findByIdAndUpdate(
      id,
      { name, currency, icon },
      options
    );
    return es.status(200).json({
      success: true,
      data: token,
    });
  } catch (error) {
    errorController(error, res, 'token');
  }
};

exports.deleteToken = async (req, res) => {
  try {
    const { id } = req.params;
    const token = await Token.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      data: token,
    });
  } catch (error) {
    errorController(error, res, 'token');
  }
};
