const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const counter = document.querySelector("#counter")
const likesList = document.querySelector(".likes")
const commentDiv = document.querySelector("#list")
const commentForm = document.querySelector("#comment-form")
let counterRunning = true

setInterval(() => {
  if (counterRunning) {
    countUp()
  }
}, 1000)

const commentList = document.createElement("ul")
commentDiv.append(commentList)

commentForm.addEventListener("submit", (event) => {
    event.preventDefault()

    listElement = document.createElement("li")
    listElement.innerText = event.target.comment.value

    commentList.append(listElement)

    event.target.reset()
})

minus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1

})

plus.addEventListener("click", () => {
    countUp()

})

heart.addEventListener("click", () => {
    const currentCount = counter.innerText
    let likesListElement = document.querySelector(`li[data-count ='${currentCount}']`)

    if(!likesListElement){
        likesListElement = document.createElement("li")
        likesListElement.dataset.count = currentCount
        likesListElement.innerHTML = `
        ${currentCount} has been liked <span>1</span> time
        `
        likesList.append(likesListElement)
    }else{
        const currentLikes = likesListElement.querySelector("span")
        currentLikes.textContent = parseInt(currentLikes.textContent) + 1
    }
})

pause.addEventListener("click", () => {
    if (counterRunning == true){
        counterRunning = false
        pause.innerText = 'resume'
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
    }else {
        counterRunning = true
        pause.innerText = 'pause'
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
    }

    
})

function countUp (){
    counter.innerText = parseInt(counter.innerText) + 1
}