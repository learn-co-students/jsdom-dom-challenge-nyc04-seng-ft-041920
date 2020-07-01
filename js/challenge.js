// As a user, I should see the timer 
// increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", function() {

  const timer = document.getElementById('counter')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const heart = document.getElementById('heart')
  const pause = document.getElementById('pause')
  const likeList = document.querySelector('.likes')
  const commentForm = document.querySelector('#comment-form')
  const commentList = document.querySelector('#list')

  likes = {}
  function count() {
    timer.textContent++;
  }
  
  let intervalId = setInterval(count, 1000);


  plus.addEventListener("click", function (e) {
    timer.textContent++;
  })

  minus.addEventListener("click", function (e) {
    timer.textContent--;
  })

  heart.addEventListener("click", function (e) {
    const num = timer.textContent
    let likesLi = document.querySelector(`li[data-counter='${num}']`)
    if(!likesLi){
      likesLi = document.createElement("li")
      likesLi.dataset.counter = num
      likesLi.innerHTML = `${num} has <span>1</span> like`
      likeList.append(likesLi)
    }else{
      const currentLikes = likesLi.querySelector("span")
      currentLikes.textContent = parseInt(currentLikes.textContent)+1
    }
    // console.log(updateLikes(likes, num))
  })

  pause.addEventListener('click', e => {
    
    if(e.target.innerText === "pause"){
      clearInterval(intervalId)

      document.querySelectorAll("button").forEach(button => {
          if (button.id !== "pause") {
            button.disabled = true
          }
        })
      pause.textContent = "resume"
    }else{
      intervalId = setInterval(count, 1000);
      document.querySelectorAll("button").forEach(button => {
        button.disabled = false
      })
    pause.textContent = "pause"
    }
  })

  commentForm.addEventListener('submit', e => {
    e.preventDefault()
    const comment = e.target.comment.value
    const commentLi = document.createElement('li')
    commentLi.textContent = comment
    commentList.append(commentLi)
  })


  // function updateLikes(obj, num) {
  //   if(obj[num]){
  //     obj[num] = parseInt(obj[num]) + 1
  //     console.log(`this is update likes ${obj[num]}`,obj)
  //   }else{
  //     obj[num] = 1
  //     console.log(`this is fisrt likes ${obj[num]}`, obj)
  //   }
  //   return obj
  // }
})