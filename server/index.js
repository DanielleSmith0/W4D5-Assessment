const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment, 
    getFortune, 
    postGoal, 
    getGoals,
    updateGoal,
    deleteGoal
} = require('./controller');

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post('/goal', postGoal);

app.get('/goals', getGoals);

app.put('/goal', updateGoal);

app.delete('/goal/:goalName', deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));
