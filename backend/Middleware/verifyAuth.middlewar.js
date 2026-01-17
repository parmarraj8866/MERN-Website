
exports.verifyAuth = async (req, res, next) => {
    const token = req.session.user
    console.log("Token : ", token)
    if (!token) {
        return res.status(401).json({
            success: false,
            token,
            message: "Please Login!"
        })
    }
    next()
}