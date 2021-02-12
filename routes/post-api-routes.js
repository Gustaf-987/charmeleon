var db = require("../models");


module.exports = function(app) {

  app.get("/api/TABLENAME", function(req, res) {
    var query = {};
    if (req.query.crime_id) {
      query.CrimeId = req.query.crime_id;
    }

    db.Post.findAll({
      where: query,
      include: [db.??]
    }).then(function(??) {
      res.json(??);
    });
  });

  app.get("/api/TABLENAME/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.??]
    }).then(function(??) {
      res.json(??);
    });
  });

  // POST route for saving a new post
  app.post("/api/TABLENAME", function(req, res) {
    db.??.create(req.body).then(function(??) {
      res.json(??);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/TABLENAME/:id", function(req, res) {
    db.??.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(??) {
      res.json(??);
    });
  });


};
