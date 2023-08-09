const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn =document.getElementById("fortuneButton")
const accompForm = document.getElementById("accomp-form")
const accompInput = document.getElementById("accomp-input")
const accompList = document.getElementById("accomp-list")

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
const generateAccomps = (list) =>{
    accompList.innerHTML = ""

    list.forEach((accomp) => {
        let ul = document.createElement('ul')
        ul.innerText = accomp
        accompList.appendChild(ul)
    })
};


const addAccomp = (event) =>{
    event.preventDefault()
    let newAccomp = accompInput.value
    console.log(newAccomp)
    let bodyObj = {
        newAccomp:newAccomp
    }
    axios.post('http://localhost:4000/api/accompArr', bodyObj)
    .then((res) => {
        console.log(res.data)
        generateAccomps(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
accompForm.addEventListener('click', addAccomp)