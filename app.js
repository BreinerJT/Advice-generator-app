const id = document.querySelector(".id")
const quote = document.querySelector(".quote")
const diceBtn = document.querySelector(".dice-btn")

diceBtn.addEventListener("click", getQuote)

async function getData(url){
    let fetchData = fetch(url)
    let response = await fetchData
    if(!response.ok) return
    let data = await response.json()
    return data;
}

async function getQuote() {
    const path = "https://api.adviceslip.com/advice"
    let { slip } = await getData(path)
    id.textContent = slip.id
    quote.textContent = slip.advice
}

getQuote()