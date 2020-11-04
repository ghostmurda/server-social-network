const {Schema, model} = require('mongoose');

const followingUser = new Schema({
    id: String,
    name: String,
    posts: String,
    followers: String,
    following: String,
    info: String
})

const post = new Schema({
    id: Number,
    name: String,
    text: String
})

const user = new Schema({
    id: String,
    name: String,
    posts: String,
    followers: String,
    following: String,
    info: String,
    postsData: [post],
    followingList: [followingUser]
})

module.exports = model('User', user);