const ProfileimageController = require('../controllers/profileimage.controller');
const { authenticate } = require('../config/jwt.config');
const { upload } = require('../config/multer.config');

module.exports = (app) => {
    app.post('/api/user/uploadImage', [upload.single('image'), authenticate], ProfileimageController.addProfileImage);
}