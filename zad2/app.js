// użyłem setInterval zamiast setTimeout, gdyz chciałem widzieć postęp odliczania w UI

const randNumberSpan = $('.randNumber')
const stopButton = $('.btn-stop')
const confirmButton = $('.btn-confirm')
const timerSpan = $('.timer')
const stopMessageEl = $('.stop-message')
const timerMessageEl = $('.timer-message')
let counter = null

const getRandomNumber = () => {
  counter = null
  const url = 'https://www.random.org/integers/?num=1&min=0&max=60&col=1&base=10&format=plain&rnd=new'

  $.ajax({
    url,
    success: (data) => {
      randNumberSpan.text(data)
      timerSpan.text(data)
      counter = data
      confirmButton.prop('disabled', false)
    }
  })
}


const confirmNumber = () => {
  timerMessageEl.removeClass('hidden')
  const timerInterval = setInterval(() => {
    counter--
    timerSpan.text(counter)
    if (counter < 0) {

      getRandomNumber()
      timerMessageEl.addClass('hidden')
      stopButton.prop('disabled', false)
      confirmButton.prop('disabled', false)
      clearInterval(timerInterval)
    }
  }, 1000)
  stopButton.prop('disabled', true)
  confirmButton.prop('disabled', true)
}

const stopApp = () => {
  counter = null
  randNumberSpan.text(null)
  stopMessageEl.removeClass('hidden')
  confirmButton.prop('disabled', true)
}

confirmButton.on('click', confirmNumber)
stopButton.on('click', stopApp)

$('document').ready(getRandomNumber)