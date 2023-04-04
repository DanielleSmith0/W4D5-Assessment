let complimentBtn = document.getElementById("complimentButton");
let fortuneBtn = document.getElementById("fortuneButton");
let getGoalsBtn = document.getElementById("get-goals-button");
let postGoalForm = document.getElementById("post-goal-form");
let putGoalForm = document.getElementById("put-goal-form");
let deleteGoalForm = document.getElementById("delete-goal-form");
let postGoalInput = document.getElementById("post-goal-input");
let postGoalText = document.getElementById("post-goal-text");
let putGoalNameInput = document.getElementById("put-goal-name-input");
let putGoalText = document.getElementById("put-goal-text");
let deleteGoalNameInput = document.getElementById("delete-goal-name-input");

// let goalForm = document.getElementById("goal-form");
// let putGoalInput = document.getElementById("put-goal");
// let putGoaltext = document.getElementById("put-goal-text");
// let putGoalBtn = document.getElementById("put-goal-btn");

// let goalStatement = document.createElement("h2");
// let goalText = document.textContent("");
// goalStatement.appendChild(goalText);
// let goalHowToStatment = document.createElement("h3");
// let goalHowToText = document.textContent("");
// goalHowToStatment.appendChild(goalHowToText);


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

postGoalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const maBod = {
        goal: postGoalInput.value,
        goalSteps: postGoalText.value
    };

    axios.post("http://localhost:4000/goal", maBod)
    .then((result) => {
        alert("goal added");
        console.log(result.data);
    })
    .catch(() => {
        console.log("backend doesn't work");
    });
});

function getGoals() {
    axios.get("http://localhost:4000/goals")
    .then((result) => {
        console.log(result.data);
    });
};

putGoalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let goal = putGoalNameInput.value;
    let goalSteps = putGoalText.value;
    
    axios.put("http://localhost:4000/goal?goal=" + goal + "&goalSteps=" + goalSteps)
    .then((result) => {
        alert("Your goal: " + goal + " has been revise. Your plan to complete it is: " + goalSteps);
        console.log(result.data);
    })
    .catch((err) => {
        alert("Something went wrong");
    });
});

deleteGoalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let goalName = deleteGoalNameInput.value;

    axios.delete("http://localhost:4000/goal/" + goalName)
    .then((result) => {
        alert(goalName + " checked off! Great work!");
        console.log(result.data);
    });
});

complimentBtn.addEventListener('click', getCompliment);

fortuneBtn.addEventListener("click", getFortune);

getGoalsBtn.addEventListener("click", getGoals);

