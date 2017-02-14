module.exports = init;

function init(app, User, randomString){
  var passport = require('passport');

  app.use(passport.initialize());
  app.use(passport.session());

  var FacebookTokenStrategy = require('passport-facebook-token');

  passport.serializeUser(function(user, done){
    done(null ,user);
  })

  passport.deserializeUser(function(obj, done){
    done(null, obj);
  });

  passport.use(new FacebookTokenStrategy({
    clientID : "313638715700821",
    clientSecret : "35f6b99397fe93284e1cfac8ec462962",
    profileField : ['id', 'displayName', 'photos', 'age', 'gender', 'permissions']
  }, function(accessToken, refreshToken, profile, done){
    console.log(profile);
    User.findOne({
      '_id' : profile.id
    }, function(err, user){
      if(err){
        return done(err);
      }
      if(!user){
        user = new User({
          _id : profile.id,
          name : profile.displayName
        });

        user.save(function(err){
          if(err) console.log(err);
          else{
            done(null, profile);
          }
        });
      }
      else if(user){
        done(null, profile);
      }
    })
  }));

  app.get('/auth/facebook/token', passport.authenticate('facebook-token'), function(req, res){
    console.log("user token : " + req.param('access_token'));
    if(req.user){
      res.send(200, req.user);
    }
    else if(!req.user){
      res.send(401, req.user);
    }
  })
}
