module.exports = {
  home: home
}

function home(req, res) {
  // renders home which is an hbs file
  res.render('home')
}
