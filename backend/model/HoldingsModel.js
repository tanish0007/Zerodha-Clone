const { model } = require('mongoose');

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };