const Dev = require("../models/Dev");
const stringToArray = require("../utils/stringToArray");

module.exports = {
    async index(req, res){

        const { latitude, longitude, techs} = req.query;
        const arrayTech = stringToArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: arrayTech,
            },
            location: {
                $near: {
                    $geometry:{
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                
                    $maxDistance: 10000,
                },
            },
        });
        console.log(devs)
        return res.json({ devs });


    }

}
