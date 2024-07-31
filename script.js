let sections = document.querySelectorAll('.section')
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 750
    let height = sec.offsetHeight

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate')
    }
  }) 
}


let paragraphs = document.querySelectorAll('.about__description p') 
paragraphs.forEach((paragraph, index) => {
  paragraph.style.transitionDelay = `${index * 0.2}`
})


document.addEventListener('DOMContentLoaded', () => {
  const pageScroll = document.querySelector('.page-scroll');
  if (pageScroll) {
    const startAnimate = () => {
      pageScroll.classList.add('animateBounce')
      setTimeout(() => {
        pageScroll.classList.remove('animateBounce')
      }, 1200)
    }

    startAnimate()
    setInterval(startAnimate, 4000)
  }
});