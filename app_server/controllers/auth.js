/* GET login page */
exports.login = (req, res) => {
  res.render('login', { title: 'Login' });
};

/* POST login (placeholder) */
exports.doLogin = (req, res) => {
  // later: check credentials
  res.redirect('/');
};

/* GET register page */
exports.register = (req, res) => {
  res.render('register', { title: 'Register' });
};

/* POST register (placeholder) */
exports.doRegister = (req, res) => {
  // later: validate + save user
  res.redirect('/login');
};
