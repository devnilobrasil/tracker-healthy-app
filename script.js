const form = document.querySelector('#form-habits')
const nwl = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', addTracker)
form.addEventListener('change', saveTracker)

function addTracker() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nwl.dayExists(today)

  if (dayExists) {
    alert('Dia ja registrado!')
    return
  }

  nwl.addDay(today)
}

function saveTracker() {
  localStorage.setItem("TrackerData", JSON.stringify(nwl.data))
}

const data = JSON.parse(localStorage.getItem("TrackerData"))
nwl.setData(data)
nwl.load()
