const Profileimage = require('../models/profileimage.model');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = {
    addProfileImage: (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        const userId = decodedJWT.payload.user_id;
        console.log(`userId: ${userId}`);
        const newProfileImage = new Profileimage({
            pImage: req.file.originalname,
            imageUserId: userId
        })
        console.log(`Profile IMG: ${newProfileImage}`);
        newProfileImage.save()
            .then((newProfileImage) => {
                console.log(`New Image: ${newProfileImage}`);
                User.findByIdAndUpdate(
                    newProfileImage.imageUserId,
                    {
                        $set: { imageId: newProfileImage._id }
                    },
                    {
                        new: true,
                        useFindAndModify: false
                    },
                )
            })
            .catch((err) => {
                console.log(`Error in Profile Image Create: ${err}`);
                res.status(400).json(err);
            })
    },

}