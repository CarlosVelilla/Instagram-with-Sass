const SCROLLRIGHTBTN = document.getElementById('stories-right-arrow')
const SCROLLLEFTBTN = document.getElementById('stories-left-arrow')
const STORIESCONTAINER = document.getElementById('stories-container')

let commentInputs

const MAINSECTION = document.getElementById('feed')

SCROLLRIGHTBTN.addEventListener('click', () => scrollStories(100))
SCROLLLEFTBTN.addEventListener('click', () => scrollStories(-100))

MAINSECTION.addEventListener('click', interactButtons)

function scrollStories(scroll) {
  let maxYScroll = STORIESCONTAINER.scrollWidth - STORIESCONTAINER.clientWidth;
  STORIESCONTAINER.scrollBy({left: scroll, behaviour: 'smooth'})
  if (STORIESCONTAINER.scrollLeft > 0) {
    SCROLLLEFTBTN.classList.remove('hidden')
  } else {
    SCROLLLEFTBTN.classList.add('hidden')
  }
  if (STORIESCONTAINER.scrollLeft < maxYScroll) {
    SCROLLRIGHTBTN.classList.remove('hidden')
  } else {
    SCROLLRIGHTBTN.classList.add('hidden')
  }
}

function createStories(amount) {
  let container = document.getElementById('stories-container')
  for (let i = 0; i < amount; i++) {
    let element = document.createElement('div')
    element.classList.add("stories__card")
    element.innerHTML = `
    <div id="stories-img-container" class="card__img-container">
      <img src="./assets/img/feed/user-profile-pic.jpg" alt="" id="stories-img" class="card__img">
    </div>
    <span id="story-username" class="card__username">Troy McLure</span>
    `
    container.appendChild(element)
  }
}

function interactButtons(event) {
  // LIKE IN POST
  if (event.target.dataset.interaction == "like-out") {
    event.target.src = "./assets/img/svg-icons/solid-color/heart-red.svg"
    event.target.dataset.interaction = "like-in"
  } else if (event.target.dataset.interaction == "like-in") {
    event.target.src = "./assets/img/svg-icons/outline/heart.svg"
    event.target.dataset.interaction = "like-out"
  }

  // LIKE IN COMMENTS
  if (event.target.dataset.commentinteraction == "like-out") {
    event.target.src = "./assets/img/svg-icons/solid-color/heart-red.svg"
    event.target.dataset.commentinteraction = "like-in"
  } else if (event.target.dataset.commentinteraction == "like-in") {
    event.target.src = "./assets/img/svg-icons/outline/heart.svg"
    event.target.dataset.commentinteraction = "like-out"
  }

  // SAVE POST BY BOOKMARK
  if (event.target.dataset.interaction == "save-out") {
    event.target.src = "./assets/img/svg-icons/solid/bookmark.svg"
    event.target.dataset.interaction = "save-in"
  } else if (event.target.dataset.interaction == "save-in") {
    event.target.src = "./assets/img/svg-icons/outline/bookmark.svg"
    event.target.dataset.interaction = "save-out"
  }
}

function changePostBtn(event) {
  let postId = event.target.dataset.input
  let postBtn = document.querySelector(`[data-post="${postId}"]`)
  if (event.target.value.length > 0) {
    postBtn.classList.remove('add-comment__submit--disabled')
  } else if (event.target.value.length == 0) {
    postBtn.classList.add('add-comment__submit--disabled')
  }
}

function createPosts(amount) {
  let container = document.getElementById('feed')
  for (let i = 0; i < amount; i++) {
    let element = document.createElement('article')
    element.classList.add("feed__post")
    element.innerHTML = `
      <header class="post__header">
        <div class="header__info">
          <div class="info__profile-pic-container"><img src="./assets/img/feed/user-profile-pic.jpg" alt="User profile pic" class="info__profile-pic"></img></div>
            <div class="info__data-container">
              <div class="info__username">_gobi</div>
              <div class="info__location">San Pepito de los Manantiales</div>
            </div>
        </div>
        <img src="./assets/img/svg-icons/outline/options.svg" alt="Post options" class="header__options"></img>
      </header>
      <img src="https://picsum.photos/1000/667?random=${i}" alt="Post image" class="post__img">
      <section class="post__info">
        <div class="post__info-interact">
          <img src="./assets/img/svg-icons/outline/heart.svg" alt="Like this post" class="post__info-icon" data-interaction="like-out"></img>
          <img src="./assets/img/svg-icons/outline/chat.svg" alt="Comment this post" class="post__info-icon post__info-icon--comment" data-interaction="comment"></img>
          <img src="./assets/img/svg-icons/outline/paper-airplane.svg" alt="Text this user" class="post__info-icon" data-interaction="chat"></img>
        </div>
        <div class="post__info-save">
          <img src="./assets/img/svg-icons/outline/bookmark.svg" alt="Like this post" class="post__info-icon" data-interaction="save-out"></img>
        </div>
      </section>
      <section class="post__likes">${getRandomLikes()} likes</section>
      <section class="post__description">
        <span class="post__description--author">_gobi</span>
        <span class="post__description--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, excepturi sed laudantium voluptas.</span>
      </section>
      <section class="post__comments">
        <div class="comments__load-more">View all ${getRandomComments()} comments</div>
        <div class="comments__coment">
          <span class="comments__coment--author">Pepito</span>
          <span class="comments__coment--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, excepturi sed laudantium voluptas.</span>
        </div>
        <div class="comments__coment">
          <span class="comments__coment--author">Juanito</span>
          <span class="comments__coment--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, excepturi sed laudantium voluptas.</span>
        </div>
      </section>
      <div class="post__time">${getRandomHours()} HOURS AGO</div>
      <section class="post__add-comment" data-comment>
        <div class="post__add-comment--container">
          <img src="./assets/img/svg-icons/outline/emoji-happy.svg" alt="Display emoji window" class="add-comment__emoji">
          <textarea class="add-comment__input" rows="1" cols="80" data-input="id-post-${i}" placeholder="Add a comment..."></textarea>
        </div>
        <a href="#" class="add-comment__submit add-comment__submit--disabled" data-post="id-post-${i}">Post</a>
      </section>
    `
    container.appendChild(element)

    commentInputs = document.querySelectorAll('[data-comment]')

    commentInputs.forEach(input => input.addEventListener('keyup', changePostBtn))
  }
}

function createSuggestions(amount) {
  let container = document.getElementById('aside-suggestions')
  for (let i = 0; i < amount; i++) {
    let element = document.createElement('div')
    element.classList.add("aside-suggestion__user")
    element.innerHTML = `
    <div class="aside-suggestion__user">
      <div class="suggestion__info-container">
        <img src="./assets/img/feed/user-profile-pic.jpg" alt="User profile pic" class="suggestion__profile-pic"></img>
        <div class="suggestion__info">
          <div class="suggestion__info--username">_gobi</div>
          <div class="suggestion__info--followed-by">Followed by Mr. Pinnaple + 5 more</div>
        </div>
      </div>
      <a href="#" class="suggestion__follow-user">Follow</a>
    </div>
    `
    container.appendChild(element)
  }
}

function getRandomLikes() {
  return Math.floor(Math.random()*100)+1
}

function getRandomComments() {
  return Math.floor(Math.random()*30)+1
}

function getRandomHours() {
  return Math.floor(Math.random()*23)+1
}

createStories(25)
createPosts(10)
createSuggestions(5)