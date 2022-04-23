const authService = require('./auth.service')

module.exports = {
    login,
    signup,
    logout
}

async function login(req, res) {
    // console.log('req',req.body);
    const { email, password } = req.body
    // console.log('user details', email,password)
    try {
        const user = await authService.login(email, password)
        // req.session.user = user;
        // res.json(user)
        console.log("controller: ",user);
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
        const {_email, _password} = req.body
        const account = await authService.signup(req.body)
        if (account){
            // const user = await authService.login(_email, _password)
            // req.session.user = user
            //res.json(user)
            console.log("signup");
            return res.status(200).json({ status: 'success' });
        }
        else{
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