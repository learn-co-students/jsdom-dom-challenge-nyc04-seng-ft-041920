const counter = document.getElementById("counter")
const options = document.getElementById("controls")
const ul = document.querySelector(".likes")
ul.style.listStyleType = "none";

// USE THIS AS A BASE TO INITIALIZE THE updateCounter()
// THINK ABOUT BASED ON WHAT CONDITION WOULD YOU STOP OR RUN
// THE updateCounter().
// let intervalId = setInterval(() => {
//   updateCounter(1)
// }, 1000)

options.addEventListener("click", (event) => {
  if (event.target.matches('#minus')) {
    updateCounter(-1)

  } else if (event.target.matches('#plus')) {
    updateCounter(1)

  } else if (event.target.matches('#heart')) {
    const count = counter.textContent
    let liLikes = document.querySelector(`li[data-counter='${count}']`)

    if (!liLikes) {
      const li = document.createElement('li')
      li.dataset.counter = count
      li.innerHTML = `Number ${count} has <span>1</span> like`
      ul.append(li)
    } else {
      currentLikes = liLikes.querySelector("span")      
      currentLikes.textContent = parseInt(currentLikes.textContent) + 1
    }

  } else if (event.target.matches('#pause')) {
    console.log(event.target)
  }
})

function updateCounter(value) {
  const newNum = parseInt(counter.textContent) + value
  counter.textContent = newNum
} 