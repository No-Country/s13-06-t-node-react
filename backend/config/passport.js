const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');
const { User } = require('../database/models');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        const user = await User.findByPk(jwt_payload.sub);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        console.log(error);
        return done(null, false);
      }
    })
  );
};
