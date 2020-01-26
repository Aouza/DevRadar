const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
    nome: String,
    url_avatar: String,
    bio: String,
    techs: [String],
    user: String,
    location: {
        type: PointSchema,
        index: "2dsphere"
    }
})

module.exports = mongoose.model("Dev", DevSchema);