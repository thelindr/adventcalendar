const dayTEST = new Date(2017,10,23)

const currentTime = new Date()

if (dayTEST.getFullYear() === currentTime.getFullYear() && dayTEST.getMonth() === currentTime.getMonth() && dayTEST.getDate() === currentTime.getDate()) {
  document.getElementById("window-day-01").classList.toggle("window-is-open")
}
