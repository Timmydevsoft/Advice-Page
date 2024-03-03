const adviceIndex = document.getElementById("advice-index");
const adviceBody = document.querySelector(".advice-body");
const getButton = document.querySelector(".dice-container");

getButton.addEventListener("click", ()=>{
    const apiUrl = "https://api.adviceslip.com/advice";
    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        adviceIndex.innerHTML = `${data.slip.id}`;
        adviceBody.innerHTML = `${data.slip.advice}`
    })

    .catch(error=>{
        console.error("Error during fetch", error)
    })
    
})