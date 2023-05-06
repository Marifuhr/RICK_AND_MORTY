const getCharById = require("./getCharById");
const login = require("./login");
const deleteFav = require("./deleteFav")
const postUser = require("./postUser")
const postFav = require("./postFav")

module.exports = {
    getCharById, login, postFav, deleteFav, postUser
}