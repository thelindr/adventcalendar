// THIS DATE OBJECT CAN BE SET TO CURRENT DATE AND USED IN CODE BELOW FOR TEST PURPOSES
const dayTEST = new Date(2017,10,23)

// DATE OBJECT FOR CURRENT TIME
const currentTime = new Date()

// DATE OBJECTS FOR ALL DAYS
const day01 = new Date(2017,11,1)
const day02 = new Date(2017,11,2)
const day03 = new Date(2017,11,3)
const day04 = new Date(2017,11,4)
const day05 = new Date(2017,11,5)
const day06 = new Date(2017,11,6)
const day07 = new Date(2017,11,7)
const day08 = new Date(2017,11,8)
const day09 = new Date(2017,11,9)
const day10 = new Date(2017,11,10)
const day11 = new Date(2017,11,11)
const day12 = new Date(2017,11,12)
const day13 = new Date(2017,11,13)
const day14 = new Date(2017,11,14)
const day15 = new Date(2017,11,15)
const day16 = new Date(2017,11,16)
const day17 = new Date(2017,11,17)
const day18 = new Date(2017,11,18)
const day19 = new Date(2017,11,19)
const day20 = new Date(2017,11,20)
const day21 = new Date(2017,11,21)
const day22 = new Date(2017,11,22)
const day23 = new Date(2017,11,23)
const day24 = new Date(2017,11,24)

// FUNCTION: COMPARE CURRENT TIME WITH A SPECIFIC DATE. IF CURRENT DATE >= SPECIFIC DATE, THEN THIS FUNCTION RETURNS true
// NOTE: AFTER 2017-12-31 THIS FUNCTION WILL ALWAYS RETURN false WHEN USED FOR THE 2017 ADVENT CALENDAR
const checkCurrentTimeAndDay = (checkThisDay) => {
  return (currentTime.getFullYear() == checkThisDay.getFullYear() && currentTime.getMonth() == checkThisDay.getMonth() && currentTime.getDate() >= checkThisDay.getDate())
}

if (checkCurrentTimeAndDay(dayTEST)) {
  const windowElement = document.getElementById("window-day-01")
  windowElement.classList.toggle("window-is-open")
  windowElement.onclick = () => {
    window.location.href = "./days/01.html"
  }
}
