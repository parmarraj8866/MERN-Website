const ContactClient = require("../Model/contact.model")

exports.ContactCreate = async (req, res) => {
    const { contactname, contactemail, contactnumber, contactmessage } = req.body
    const contactclient = await ContactClient.create({ contactname, contactemail, contactnumber, contactmessage })
    res.json({
        success: true,
        contactclient
    })
}