const counter = document.querySelector("#counter");
let isPaused = false;
const count = setInterval(updateCounter, 1000, 1);
const likesUl = document.querySelector('.likes');
const commentList = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");


function updateCounter(nbr) {
    if (!isPaused) {
        counter.textContent = parseInt(counter.textContent) + nbr
    }
};

function changeButtonStatus(status) {
    document.querySelector("#minus").disabled = status;
    document.querySelector("#plus").disabled = status;
    document.querySelector("#heart").disabled = status;
}

function updateLikes() {
    const currentCount = parseInt(counter.textContent)
    let currentLi = document.querySelector(`li[data-id = '${currentCount}']`)
    if (!currentLi) {
        currentLi = document.createElement("li")
        currentLi.dataset.id = currentCount
        currentLi.innerHTML = `${currentCount} has <span>1</span> like`
        likesUl.append(currentLi)
    } else {
        const likes = currentLi.querySelector("span");
        likes.textContent = parseInt(likes.textContent) + 1
    }
};

document.body.addEventListener("click", event => {
    if (event.target.id === "minus") {
        updateCounter(-1)
    } else if (event.target.id === "plus") {
        updateCounter(1)
    } else if (event.target.id === "heart") {
        updateLikes()
    } else if (event.target.id === "pause") {
        if (event.target.textContent === "resume") {
            isPaused = false
            changeButtonStatus(false)
            event.target.textContent = "pause"
        } else {
            isPaused = true
            changeButtonStatus(true)
            event.target.textContent = "resume"
        }
    }
});

commentForm.addEventListener("submit", event => {
    event.preventDefault()
    const commentTag = document.createElement("p")
    commentTag.textContent = event.target.comment.value
    commentList.append(commentTag)
    event.target.reset();
});