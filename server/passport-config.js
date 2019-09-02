const LocalStrategy = require('passport-local').Strategy

initialize = (passport, getUserByLogin, getUserById) => {
    const authenticateUser = async (login, password, done) => {
        let user = null;
        await getUserByLogin(login).then(u => user = u)
        
        if(!user.length) {
            return done(null, false, {message: 'No users with this login'})
        }
        try{
            if(password === user[0].password)
                return done(null, user)
            else
                return done(null, false, {message: 'Password incorrect'})
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'user'},
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user._id))
    passport.deserializeUser((_id, done) => {
        return done(null, getUserById(_id))
    })
}

module.exports = initialize