const authService = require('./auth.service')

module.exports = {
    login,
    register,
    logout
}

async function login(req, res) {
    // console.log('req',req.body);
    const { email, password } = req.body
    // console.log('user details', email, password)
    try {
        const user = await authService.login(email, password)
        // req.session.user = user;
        // res.json(user)
        // console.log("controller: ", user);
        return res.status(200).json(user);
    } catch (err) {
         return res.status(401).json({ error: err })
    }
}

async function register(req, res) {
    try {
        const account = await authService.signup(req.body)
        console.log("new User");
        return res.status(200).end();
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send({ error: 'could not signup, please try later' })

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