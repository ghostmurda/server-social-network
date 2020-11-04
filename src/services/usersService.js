const User = require('../models/Users');

const getUser = (userId) => {
    User.find({id: userId}, (err, data) => {
        if(err){
            return err;
        } else {
            return data;
        }
    })
}

module.exports = {getUser};