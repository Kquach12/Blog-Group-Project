const mongoose = require('mongoose');

const ProfileimageSchema = new mongoose.Schema({
    
    pImage: {
        type: String
    },

    imageUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

}, { timestamps: true });

module.exports = mongoose.model("Profileimage", ProfileimageSchema);