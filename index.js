;(() => {
  const getRand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min)
  }

  const target = document.querySelector('.target')
  const btn = document.querySelector('.btn')

  btn.addEventListener('click', () => {
    const digit = getRand(1, 100000)
    if (target.classList.contains('noactive')) {
      target.classList.remove('noactive')
    }
    target.textContent = digit
  })
})()
