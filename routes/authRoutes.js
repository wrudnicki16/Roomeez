const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // function provided by passport
    res.send(req.user);
  });

  // just a test route for auth
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
