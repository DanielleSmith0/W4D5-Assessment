let database = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Enjoy life! It is better to be happy than wise.", "If you can't excel with talent, triumph with effort.", "You struggle for success, and it shows", "If you want to hit the target, shoot first then call what you hit the target.", "You will have 20 kids."];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    postGoal: (req, res) => {
        database.push(req.body)
        console.log(req.body)
        res.status(200).send("Goal posted")
    },
    getGoals: (req, res) => {
        res.status(200).send(database);
    },
    updateGoal: (req, res) => {
        let goal = req.query.goal

        let goalSteps = req.query.goalSteps

        let index

        for(let i = 0; i < database.length; i++) {
            let currentInput = database[i].goal;
            if (currentInput === goal){
                index = i;
            };

        };
        if(index === undefined) {
            res.status(400).send('goal not found')
        }else{
            database[index].postGoalText = goalSteps
            delete database.goalSteps;
            res.status(200).send(database);
        };
    },
    deleteGoal: (req, res) => {
        let {goalName} = req.params;

        let index

        for(let i = 0; i < database.length; i++) {
            let currentInput = database[i].goal;
            if (currentInput === goalName){
                index = i;
            };

        };

        if(index === undefined) {
            res.status(400).send('That is not a listed goal')
        }else{
            database.splice(index, 1)
            res.status(200).send(database);
        };    
    }
}