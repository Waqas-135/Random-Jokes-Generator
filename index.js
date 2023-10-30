const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("jokes")


const apiKey = "oDMEYexqK/XI8WIdFh3Ywg==Z9mZorHv5tZ3iZqG";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "Get",
    headers: {
        "X-Api-Key": apiKey,
    },

};

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const responce = await fetch(apiURL, options) ;    
    const data = await responce.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An Error Occured, Tr again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
    }

    
}

btnEl.addEventListener("click", getJoke)