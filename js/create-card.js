
const cardTitle = document.querySelector('#card-title')
const cardDescription = document.querySelector('#card-description')
const contactInfo = document.querySelector('#contact-info')
const submitBtn = document.querySelector('.submit-btn')

const cardsContainer = document.querySelector('.cards-container')




// submit button clicks
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()  // desable the form submission
  creatingCard()
})


function creatingCard() {
  let resultCollection = gettingUserInput()
  createCardUI(resultCollection)

}

function createCardUI(collection) {
  console.log(collection)
}

function gettingUserInput() {
  let title = cardTitle.value 
  let description = cardDescription.value 
  let contact = contactInfo.value 

  return [title, description, contact]
}