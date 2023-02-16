// rating state visible
// track which button is pushed
// hide rating state and show thank state
// input rating into num out of 5

const ratingState = document.getElementById('rating-state')
const thankState = document.getElementById('thank-state')
const submitBtn = document.getElementById('submit-btn')
const rating = document.getElementById('rating')
const rateBtn = document.querySelectorAll('#rate-btn')

submitBtn.addEventListener("click", () => {
    ratingState.style.display = 'none';
    thankState.style.display = 'block';
})

rateBtn.forEach((choice) => {
    choice.addEventListener("click", () => {
        rating.innerHTML = choice.innerHTML
    })
})