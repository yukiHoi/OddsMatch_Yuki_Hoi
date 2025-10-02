/* GET login page */
exports.login = (req, res) => {
  res.render('login', { title: 'Login' });
};

/* POST login (placeholder) */
exports.doLogin = (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.render('login', { title: 'Login', error: 'All fields required.' });
    return;
  }
  res.redirect('/');
};
exports.logout = (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        console.log('Error destroying session:', err);
      }
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
};

/* GET register page */
exports.register = (req, res) => {
  res.render('register', { title: 'Register' });
};

/* POST register (placeholder) */
exports.doRegister = (req, res) => {
  let { firstName, lastName, email, phoneNo, address, password, confirm } = req.body;

  if (!firstName || !lastName || !email || !phoneNo || !address || !password || !confirm) {
    res.render('register', { title: 'Register', error: 'All fields required.' });
    return;
  }
  if (password !== confirm) {
    res.render('register', { title: 'Register', error: 'Passwords do not match.' });
    return;
  }
  res.redirect('/login');
};

/* About page */
exports.about = (req, res) => {
  res.render('generic-text', { title: 'About' });
};
