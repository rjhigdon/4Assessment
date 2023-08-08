let accompArr =[]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["your day will be good", "your day will be bad", "Believe it can be done", "Distance yourself from the vain", "Do not just think, act!"]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    addAccomp: (req, res) => {
        console.log(req.body)
        accompArr.push(req.body.newAccomp)
        res.status(200).send(accompArr)
        console.log(accompArr)
    }

}