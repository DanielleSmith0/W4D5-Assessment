const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const goalForm = document.getElementById("goal-form");
const putGoalInput = document.getElementById("put-goal");
const putGoaltext = document.getElementById("put-goal-text");
const putGoalBtn = document.getElementById("put-goal-btn");



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

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener("click", getFortune)