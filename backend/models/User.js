const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['Investor', 'Entrepreneur'], 
    required: true 
  },
  
  // Fields specific to Entrepreneurs
  entrepreneurProfile: {
    startupName: { type: String },
    bio: { type: String },
    industry: { type: String }
  },

  // Fields specific to Investors
  investorProfile: {
    investmentHistory: [String],
    preferences: [String],
    budget: { type: Number }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);