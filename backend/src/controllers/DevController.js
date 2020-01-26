const Dev = require("../models/Dev");
const axios = require("axios");
const stringToArray = require("../utils/stringToArray");
module.exports = {

    async index(req, res){
    const devs = await Dev.find();

    return res.json(devs);

    },

    async storage(req, res) {

    const { user, techs, longitude, latitude } = req.body;

    const listTechs = stringToArray(techs);

    let dev = await Dev.findOne({user});

    if(!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${user}`);
        const { name = login, avatar_url, bio} = apiResponse.data;
    
        console.log(name, avatar_url, bio, user);
    
        const location = {
            type: "Point",
            coordinates: [latitude, longitude]
        }
    
        dev = await Dev.create({
            nome:name,
            user: user,
            avatar_url: avatar_url,
            bio: bio,
            techs: listTechs,
            location: location,
            
            });
    }

        return res.json(dev);
        }
    };