const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel