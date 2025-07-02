const mongoose = require('mongoose');

const resignationSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lwd: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
});

const Resignation = mongoose.model('Resignation', resignationSchema);
module.exports = Resignation;