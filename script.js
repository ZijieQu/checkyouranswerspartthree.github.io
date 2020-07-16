const answerOne = document.getElementById('answerOne')
const answerTwo = document.getElementById('answerTwo')
const answerThree = document.getElementById('answerThree')
const answerFour = document.getElementById('answerFour')
const answerFive = document.getElementById('answerFive')
const answerSix = document.getElementById('answerSix')
const answerSeven = document.getElementById('answerSeven')
const answerEight = document.getElementById('answerEight')
const answerNigh = document.getElementById('answerNigh')
const answerTen = document.getElementById('answerTen')
const answerEleven = document.getElementById('answerEleven')
const answerTwelve = document.getElementById('answerTwelve')
const answerThirteen = document.getElementById('answerThirteen')
const answerFourteen = document.getElementById('answerFourteen')
const answerFifteen = document.getElementById('answerFifteen')
const answerSixteen = document.getElementById('answerSixteen')
const answerSeventeen = document.getElementById('answerSeventeen')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (answerOne.value === '' || answerOne.value == null) {
    messages.push('Answer is required')
  }

  if (answerOne.value == 2.5) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerTwo.value == 64) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerThree.value == 12) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFour.value == 168) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFive.value == 0.58) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSix.value == 33.28) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSeven.value == 110) {
    messages.push('correct')
  } else {
      messages.push('error')
    }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
