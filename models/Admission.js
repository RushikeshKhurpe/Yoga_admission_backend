const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
  
  },
  lastName: {
    type: String,
   
  },
  age: {
    type: Number,
   
  },
  email: {
    type: String,
    
    unique: true,
    trim: true,
    lowercase: true,
  },
  selectedBatch: {
    type: String,
    
    enum: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
