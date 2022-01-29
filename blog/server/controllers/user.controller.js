const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {

    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    user_id: user._id
                }, process.env.JWT_SECRET);
                // FIXME: Cookie might not create and allow registration to be instantly logged in
                res.cookie("usertoken", userToken, process.env.JWT_SECRET, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 90000000)
                })
                .json({ msg: "Success!", user: user});
            })
            .catch((err) => res.status(400).json(err));
    },

    login: (req, res) => {
        User.findOne({
            email: req.body.email
        })
        .then((userRecord) => {
            if(userRecord === null) {
                res.status(400).json({
                    message: "Invalid Login attempt"
                });
            } else {
                // TODO: Remove from code after working
                console.log("record found");
                bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid) => {
                        if(isPasswordValid) {
                            // TODO: Remove after working
                            console.log("good to go!")
                            res.cookie("usertoken",
                            jwt.sign({
                                user_id: userRecord._id
                            },
                            process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 90000000)
                            }
                            ).json({
                                message: "Success",
                                userFirstName: userRecord.firstName,
                                userLastName: userRecord.lastName
                            })
                        } else {
                            // TODO: Remove after working
                            console.log("else")
                            res.status(400).json({
                                message: "invalid login attempt"
                            })
                            .catch((err) => {
                                // TODO: remove after working
                                console.log("comparison invalid")
                                res.status(400).json({
                                    message: "invalid login"
                                })
                            })
                        }
                    })
            }
        })
    },

    logout: (req, res) => {
        console.log("Logging out");

        res.clearCookie('usertoken');
        res.sendStatus(200)
        // The json creates an error.  Logout works
        // .json({
        //     message: "You have successfully logged out!"
        // });

    },

    getLoggedInUser: (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        User.findById(decodedJWT.payload.user_id)
            .populate({                
                path: "blogPostsCreated",
                model: "Blog",
                populate: {
                    path: "comments",
                    model: "Comment"
                }
            })
            .then((foundUser) => {
                console.log(`Found User: ${foundUser}`)
                res.json(foundUser);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    // FIXME: getAll Users should not stay in final code!
    getAll: (req, res) => {
        User.find()
            .populate({
                path: "commentsMade",
                model: "Comment",
                    populate: {
                        path: "blogId",
                        model: "Blog",
                    }
            })
            .then((allUsers) => {
                console.log(allUsers);
                res.json(allUsers);
            })
            .catch((err) => res.status(400).json(err));
    },

    deleteOneUser: (req, res) => {
        User.findByIdAndDelete({ _id: req.params.id })
            .then((deletedUser) => {
                console.log(`Deleted: ${deletedUser}`);
                res.json(deletedUser);
            })
            .catch((err) => {
                console.log(err);
            });
    },

}
