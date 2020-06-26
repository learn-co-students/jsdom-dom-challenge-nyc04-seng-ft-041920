const controls = document.querySelector("#controls")
const counter = document.querySelector("#counter")
const likesUl = document.querySelector(".likes")
const commentsDiv = document.querySelector("#list")
const commentForm = document.querySelector("#comment-form")

const commentInput = document.querySelector('#comment-input')
const commentBtn = document.querySelector("#submit")
console.log(commentBtn)

let intervalId = setInterval(() => {
  // the counter
  updateCounter(1)
}, 1000)

function updateCounter(change) {
  const likes = parseInt(counter.textContent) + change
  counter.textContent = likes
}

function pauseTimer(pauseBtn) {
  clearInterval(intervalId)
  document.querySelectorAll('button').forEach(button => {
    if (button.id !== 'pause') {
      button.disabled = true;
    }
  })
  pauseBtn.textContent = "resume"
}

controls.addEventListener('click', e => {
  if (e.target.id === 'minus') {
    updateCounter(-1)
  } else if (e.target.id === 'plus') {
    updateCounter(1)
  } else if (e.target.id === 'pause') {
      if (e.target.textContent === 'pause') {
        pauseTimer(e.target)
      } else {
        intervalId = setInterval(() => {
          // the counter
          updateCounter(1)
        }, 1000)
        document.querySelectorAll('button').forEach(button => {
            button.disabled = false;
        })
        e.target.textContent = "pause"
      }
  } else if (e.target.id === 'heart') {
    // where are the comments going to go?
    const keepCount = counter.textContent
    let likesLi = document.querySelector(`li[data-keep-count='${keepCount}']`)
    if (!likesLi) {
      likesLi = document.createElement("li")
      likesLi.dataset.keepCount = keepCount
      likesUl.appendChild(likesLi)
      likesLi.innerHTML = `${keepCount} has <span>1</span> like`
    } else {
      const currentLikes = likesLi.querySelector("span")
      currentLikes.textContent = parseInt(currentLikes.textContent) + 1;
    }
  }
})

commentBtn.addEventListener('click', e => {
  e.preventDefault();
  let par = document.createElement('li')
  console.log(commentInput.value)
  par.textContent = commentInput.value
  commentsDiv.appendChild(par)
  // reset it afterwards
  commentForm.reset()
})

// Don't look at this down here
// let body = document.querySelector('body')
// let counter = document.getElementById('counter')
// let value; // holds onto the number
// // buttons
// let plus = document.getElementById('plus')
// let minus = document.getElementById('minus')
// let pause = document.getElementById('pause')
//
// let countdown = function count() {
//   value = counter.textContent++;
// }
//
// setInterval(countdown, 1000);
//
// plus.addEventListener('click', function(e) {
//   value = counter.textContent++;
// })
//
// minus.addEventListener('click', function(e) {
//   value = counter.textContent--;
//   console.log(value);
// })
//
// // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// // 4. As a user, I can pause the counter, which should
// //
// //   * pause the counter
// //   * disable all buttons except the pause button -- add ATTR of disabled to each button
// //   * the pause button should then show the text "resume." -- change text content of button
// //
// pause.addEventListener('click', function(e) {
//   pause.textContent = "resume";
//   pause.id = 'resume';
//   minus.disabled = true;
//   plus.disabled = true;
//   clearInterval(countdown);
//   if (pause.id === 'resume') {
//     console.log("WORK")
//
//     pause.addEventListener('click', function(e) {
//       // pause.textContent = "pause";
//     //   pause.id = 'pause';
//     //   minus.disabled = false;
//     //   plus.disabled = false;
//     //   setInterval(countdown, 1000);
//     })
//   }
// })
