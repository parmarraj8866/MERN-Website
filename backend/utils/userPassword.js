
const bcrypt = require("bcryptjs")

exports.PlainToHash = async (password) => {
    const salt = bcrypt.genSaltSync(10)
    return await bcrypt.hash(password, salt)

}

exports.HashToPlain = async (password, hashpass) => {
    return await bcrypt.compare(password, hashpass)
}