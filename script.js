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
})

document.addEventListener('scroll', () => {
  const pageScroll = document.querySelector('.page-scroll')
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const fadeOutTop = 700
  
  if (scrollTop < fadeOutTop)
  { pageScroll.style.opacity = 1 -scrollTop / fadeOutTop

  }
  else {
    pageScroll.style.opacity = 0
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const loadingscreen = document.getElementById('loading-screen')
  const app = document.getElementById('app')    
  window.addEventListener('load', () => {
    loadingscreen.style.display = 'none'
    app.style.display = 'block'
  })
})

//cursor tracking
const coords = {x: 0, y: 0}
const circles = document.querySelectorAll('.circle')
const colors = ["#6610f2", "#5314de", "#441ac8","#381fb3", "#2f239f", "#29268c", "#282c7a", "#29306a", "#29325a", "#28314b", "#252d3e", "#222831"]
circles.forEach((circle, index) => {
  circle.x = 0
  circle.y = 0
  circle.style.backgroundColor = colors[index % colors.length]
})
window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
  animateCircle();
})

function animateCircle() {
    let x = coords.x
    let y = coords.y

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + 'px'
      circle.style.top = y - 12 + 'px'
      
      circle.style.scale = [circles.length - index] / circles.length
      
      circle.x = x
      circle.y = y


      const nextCircle = circles[index + 1] || circle[0]
      x += (nextCircle.x - x) * 0.5
      y += (nextCircle.y - y) * 0.5

    })

  requestAnimationFrame(animateCircle)

}

