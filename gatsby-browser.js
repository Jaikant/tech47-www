import objectFitImages from 'object-fit-images';
const throttle = require('lodash/throttle');

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    return {
      height,
      width,
    }
  }

  return {
    width: 0,
    height: 0,
  }
}

function handleFadeInAndOutOnScroll() {
  const clamp = value => Math.min(Math.max(value, 0), 1)

  const handleScroll = throttle(() => {
    const { height } = getWindowDimensions()
    const elements = Array.from(document.querySelectorAll('[data-scroll-fade]'))

    elements.forEach(element => {
      const box = element.getBoundingClientRect()

      if (box.top < height / 3.33) {
        // Fade out the element when it reaches the top 2/3 of the page
        element.style.opacity = clamp(
          (box.top + element.offsetHeight / 1.5) / (height / 3.33)
        )
      } else {
        // Fade in the element from the bottom of the page
        element.style.opacity = clamp((1 - box.top / height) * 1.66)
      }
    })
  }, 15)

  window.addEventListener('scroll', handleScroll)
}


export const onInitialClientRender = () => {
  handleFadeInAndOutOnScroll()
  objectFitImages();
};
