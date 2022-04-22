const authService = require('./auth.service')

module.exports = {
    login,
    signup,
    logout
}

async function login(req, res) {
    //console.log('req',req.body);
    const { email, password } = req.body
    console.log('user details', email,password)
    // try {
    //     const user = await authService.login(email, password)
    //     req.session.user = user;
    //     res.json(user)
    // } catch (err) {
    //     res.status(401).send({ error: err })
    // }
}

async function signup(req, res) {
    try {
        // const { fullName, password, userName } = req.body
        // logger.debug(fullName + ", " + userName + ', ' + password)
        const account = await authService.signup(req.body)
        //logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        // const user = await authService.login(userName, password)
        // req.session.user = user
        // res.json(user)
    } catch (err) {
        //logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}