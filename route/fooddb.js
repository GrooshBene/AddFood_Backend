module.exports = init;

function init(app){

  var parse = require('SaFood-Parse');

  app.post('/search', function(req, res){
    parse.getFoodInfo('c3a5142c-ad30-4589-b67f-9eac3cdfab6c', 'a165bdd3-346a-4877-9b22-fb01edd2cb16', {
      foodType: 'PFD',
      searchField: req.param('searchType'),
      searchValue: req.param('query'),
      offset: 1,
      limit: 10
  }, function (err, result) {
      console.log(result);
      res.send(200, result);

})
  })
}
