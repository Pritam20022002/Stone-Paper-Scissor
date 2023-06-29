const gameContainer = document.querySelector(".container")
const userResult = document.querySelector(".user_result img")
const cpuResult = document.querySelector(".cpu_result img")
const result = document.querySelector(".result")
const optionImages = document.querySelectorAll(".option_image")
const you = document.getElementById("you")
const cpu = document.getElementById("cpu")

let userScore = 0
let cpuScore = 0
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")

        result.innerHTML = "<h3>Wait..."

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active")
        })
        gameContainer.classList.add("start")
        let time = setTimeout(() => {
            gameContainer.classList.remove("start")
            let imageSrc = e.target.querySelector("img").src
            userResult.src = imageSrc
            let random = Math.floor(Math.random() * 3)
            let cpuImages = ["rock.png", "paper.png", "scissor.png"]
            cpuResult.src = cpuImages[random]
            let cpuValue = ["R", "P", "S"][random]
            let userValue = ["R", "P", "S"][index]
            let outcomes = {
                RR: "DRAW",
                RP: "CPU WON THIS ROUND +2",
                RS: "YOU WON THIS ROUND +2",

                PP: "DRAW",
                PR: "YOU WON THIS ROUND +2",
                PS: "CPU WON THIS ROUND +2",

                SS: "DRAW",
                SR: "CPU WON THIS ROUND +2",
                SP: "YOU WON THIS ROUND +2",
            }
            let outComeValue = outcomes[userValue + cpuValue]
            if(outComeValue == "YOU WON THIS ROUND +2" || outComeValue ==  "YOU WON THIS ROUND +2" || outComeValue == "YOU WON THIS ROUND +2" ){
                userScore += 2
            }
            else if(outComeValue == "CPU WON THIS ROUND +2" || outComeValue == "CPU WON THIS ROUND +2" || outComeValue == "CPU WON THIS ROUND +2" ){
                cpuScore += 2
            }
            else{
                userScore += 0
                cpuScore += 0
            }
            result.innerHTML = userValue === cpuValue ? "Round Draw +0" : `<h3>${outComeValue}`
            you.innerHTML = `<h2>YOU : ${userScore}`  
            cpu.innerHTML = `<h2>CPU : ${cpuScore}` 
            if(userScore == 10){
                window.open("win.html", "_self")
            }
            else if(cpuScore == 10){
                window.open("lost.html", "_self")
            }          
        }, 2000)

    })
})


