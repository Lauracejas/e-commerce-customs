const withAuth = (req, res, next) => {
    // TODO: Add a comment describing the functionality of this if statement
    //if the user is no logged in, redirect to the homepage, if is loged in, go to the next function
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;