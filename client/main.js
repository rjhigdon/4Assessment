const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn =document.getElementById("fortuneButton")
const accForm = document.getElementById("acc-form")
const accInput = document.getElementById("acc-input")
const accList = document.getElementById("acc-list")

const getCompliment = () => {
    axios
    .get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => {
        const data = res.data;
        alert(data);
    })
    .catch((err) => {
        console.log(err)
    })
};
const listAcc = (event) =>{

}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addBtn.addEventListener('click', addAcc)