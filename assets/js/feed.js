const SCROLLRIGHTBTN = document.getElementById('stories-right-arrow')
const SCROLLLEFTBTN = document.getElementById('stories-left-arrow')
const STORIESCONTAINER = document.getElementById('stories-container')

SCROLLRIGHTBTN.addEventListener('click', () => scrollStories(25))
SCROLLLEFTBTN.addEventListener('click', () => scrollStories(-25))


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
