module.exports = function stringToArrya(strings){
    return strings.split(",").map(string => {
        return string.trim();
    })
}