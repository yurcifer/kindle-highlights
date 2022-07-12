const User = require('./models/User');

class authContorller {
  async registration(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res) {
    try {
      res.json('server works');
      const user = new User({ userName: 'test_duplicate', password: 'test' });
      await user.save();
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authContorller();
