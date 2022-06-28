
const randomController = {};



randomController.renderRandom =(req, res)=> {
    let miURL = new URL(`http://3000:8080${req.url}`)
    let num = miURL.searchParams.get('cant')

    if(num === null){
        num = 100000000
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    res.send (JSON.stringify(getRandomInt(num)))
};







module.exports= randomController