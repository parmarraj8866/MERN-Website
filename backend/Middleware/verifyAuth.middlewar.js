
exports.verifyAuth = async (req, res, next) => {
    const token = req.session.user
    if (!token) {
        return res.json({
            success: false,
            message: "Please Login!"
        })
    }
    next()
}