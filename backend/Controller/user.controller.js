const { User } = require("../Model/user.model")
const { PlainToHash, HashToPlain } = require("../utils/userPassword")



exports.signup = async (req, res) => {
    try {
        const { username, email, password, mobile } = req.body
        const hashPass = await PlainToHash(password)
        const matchUser = await User.findOne({
            email
        })

        if (matchUser) {
            return res.json({
                success: false,
                message: "Email Already Exist!"
            })
        }
        const user = await User.create({ username, email, password: hashPass, mobile })

        res.json({
            success: true,
            message: "User Signup Successfully!"
        })
    }

    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }


}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const matchUser = await User.findOne(
        { email }
    )

    if (!matchUser) {
        return res.json({
            success: false,
            message: "EmailId Not Exist!"
        })
    }

    const matchPass = await HashToPlain(password, matchUser.password)

    if (!matchPass) {
        return res.json({
            success: false,
            message: "Password Not Match!"
        })
    }

    req.session.user = {
        useremail: matchUser.email,
        userid: matchUser._id
    }

    res.json({
        success: true,
        message: "User Login Successfully!"
    })
}


exports.checkAuth = async (req, res) => {
    const token = req.session.user
    if (!token) {
        return res.json({
            success: false,
            message: "Please Login",
            user: null
        })
    }

    res.json({
        success: true,
        message: "Login!",
        user: token
    })
}


exports.logout = async (req, res) => {
    req.session = null

    res.json({
        success: true,
        message: "Successfully Logout!"
    })
}
