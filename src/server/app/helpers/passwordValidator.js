import bcrypt from 'bcrypt';

class ValidatePassword {
  hashPassword(passwordString) {
    return bcrypt.hashSync(passwordString, bcrypt.genSaltSync(8));
  }

  comparePassword(passwordString, userPassword) {
    return bcrypt.compareSync(passwordString, userPassword);
  }
};

export default new ValidatePassword;