const day01 = new Date(2017,10,23)

const currentTime = new Date()

if (day01.getFullYear() === currentTime.getFullYear() && day01.getMonth() === currentTime.getMonth() && day01.getDate() === currentTime.getDate()) {
  document.getElementById("window-day-01").classList.toggle("window-is-open")
}
