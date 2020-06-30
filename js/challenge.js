
// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// 4. As a user, I can pause the counter, which should 

//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."

//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


//************ plus, minus, like, pause buttons *************/ 
const h1Counter = document.querySelector("#counter")
const likesUl = document.querySelector(".likes")

// 1. As a user, I should see the timer increment every second once the page has loaded.

let counterRunning = true//do not use 'const' then cannot reassign it. use const for obj. 

setInterval(() => {
    console.log("setIntervalRunning")
    if(counterRunning){
    updateCounter(1)
    }
}, 1000)

function updateCounter(change){
    const newNumber = parseInt(h1Counter.textContent) + change
    h1Counter.textContent = newNumber
}

//setInterval(updateCounter, 1000)
//setInterval(undefined, 1000)

// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
document.addEventListener("click", e => {
    console.log("clicked on the webpage")
    //console.log(e.target)
    //debugger
    if(e.target.id === "minus"){
        console.log("minus clicked bish!!")    
        updateCounter(-1)
    }
    if(e.target.id === "plus"){
        console.log("PLUS clicked bish!!")  
        updateCounter(+1)  
    }
    if(e.target.id === "pause"){
        console.log("PAUSE clicked bish!!")
        if(e.target.textContent === "pause"){
            pauseTimer(e.target)

        }else{ //if it's resume
        console.log( " R E S U M E  Timer!!")
        
        counterRunning = true

        //enable the buttons
        document.querySelectorAll("button").forEach(button => {
          if (button.id !== "pause") {
            button.disabled = false
          }
        })
        //change the pause btn text

        e.target.textContent = "pause"
        }
    }
    if(e.target.id === "heart"){
        console.log("❤️")
        const counter = h1Counter.textContent

        let likesLi = document.querySelector(`li[data-counter='${counter}']`)//if the data counter is equal to the counter  #################### 
        if (!likesLi){
        //debugger
        likesLi = document.createElement("li") //create li 
        likesLi.dataset.counter = counter //add data attribute, which number is related to in html.<li data-counter="2">
        likesLi.innerHTML = `${counter} has <span>1</span> likes` //why span?
        likesUl.append(likesLi)
        }else{
            const currentLikes = likesLi.querySelector("span")
            currentLikes.textContent = parseInt(currentLikes.textContent) + 1
        }
    }
})


function pauseTimer(pauseBtn) { //pauseBtn = e.target
        // console.log(intervalId)
        // stop the timer
        console.log("pauseTimer!!")
       
        counterRunning = false

        // disable the buttons
        document.querySelectorAll("button").forEach(button => {
          if (button.id !== "pause") {
            button.disabled = true
          }
        })
        // change the pause btn text
        pauseBtn.textContent = "resume"
}




//comment features
let commentList = document.querySelector("#list")
let commentForm = document.querySelector("#comment-form")

commentForm.addEventListener("submit", e => {
    
    e.preventDefault()
    
    let commentText = e.target.comment.value //get the comment from the text field
    let commentP = document.createElement("p")//create a newDOM element for the comment
    commentP.textContent = commentText//add the comment into the location
    commentList.append(commentP) //add to the page
   // e.target.reset()//clear the form 
})
//end of comment feature
