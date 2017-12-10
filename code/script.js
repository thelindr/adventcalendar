// DATE OBJECT FOR CURRENT TIME
const currentTime = new Date()

// ARRAY OF DATE OBJECTS (INCLUDING TEST DATE OBJECT)
const days = [
  new Date(2017,11,1),
  new Date(2017,11,2),
  new Date(2017,11,3),
  new Date(2017,11,4),
  new Date(2017,11,5),
  new Date(2017,11,6),
  new Date(2017,11,7),
  new Date(2017,11,8),
  new Date(2017,11,9),
  new Date(2017,11,10),
  new Date(2017,11,11),
  new Date(2017,11,12),
  new Date(2017,11,13),
  new Date(2017,11,14),
  new Date(2017,11,15),
  new Date(2017,11,16),
  new Date(2017,11,17),
  new Date(2017,11,18),
  new Date(2017,11,19),
  new Date(2017,11,20),
  new Date(2017,11,21),
  new Date(2017,11,22),
  new Date(2017,11,23),
  new Date(2017,11,24),
  new Date(2017,10,24) // ONLY USE FOR TEST: THIS DATE OBJECT CAN BE SET TO ANY DATE AND USED IN CODE BELOW FOR TEST PURPOSES
]

// FUNCTION: COMPARE CURRENT TIME WITH A SPECIFIC DATE. IF CURRENT DATE >= SPECIFIC DATE, THEN THIS FUNCTION RETURNS true
// NOTE: AFTER 2017-12-31 THIS FUNCTION WILL ALWAYS RETURN false WHEN USED FOR THE 2017 ADVENT CALENDAR
const checkCurrentTimeAndDay = (checkThisDay) => {
  if (currentTime.getFullYear() == checkThisDay.getFullYear() && // IF YEAR FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
      currentTime.getMonth() == checkThisDay.getMonth() && // AND IF MONTH FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
      currentTime.getDate() > checkThisDay.getDate()) { // AND IF DAY FROM CURRENT TIME IS MORE THAN TO DAY FROM SPECIFIC DATE
        return 2
      } else if (currentTime.getFullYear() == checkThisDay.getFullYear() && // IF YEAR FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
                 currentTime.getMonth() == checkThisDay.getMonth() && // AND IF MONTH FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
                 currentTime.getDate() == checkThisDay.getDate()) { // AND IF DAY FROM CURRENT TIME IS EQUAL TO DAY FROM SPECIFIC DATE
                   return 1
                 } else {
                   return 0
                 }
}

// FUNCTION: CHECK ALL DAYS---WILL ONLY WORK WHEN CURRENT TIME IS 1--31 DEC
// const checkAllDays = () => {
//   days.forEach((day, index) => {
//     actualDay = index + 1
//     dayString = (actualDay < 10 ? "0" + actualDay : actualDay)
//     if (checkCurrentTimeAndDay(day) == 2) { //UPDATE
//       const windowElement = document.getElementById(`window-day-${dayString}`)
//       windowElement.classList.toggle("window-is-open")
//       windowElement.onclick = () => {
//         window.location.href = `./days/${dayString}.html`
//       }
//     } else if (checkCurrentTimeAndDay(day) == 1) {
//         const windowElement = document.getElementById(`window-day-${dayString}`)
//         windowElement.classList.toggle("window-is-test")
//       }
//   })
// }

// INVOKE FUNCTION 'CHECK ALL DAYS'---WILL ONLY WORK WHEN CURRENT TIME IS 1--31 DEC
// checkAllDays()

// USE FOR TEST: APPLIED TO WINDOW FOR DAY 1
if (checkCurrentTimeAndDay(days[24]) == 2) {
  const windowElement = document.getElementById("window-day-01")
  windowElement.classList.toggle("window-is-open")
  windowElement.onclick = () => {
    window.location.href = "./days/01.html"
  }
} else if (checkCurrentTimeAndDay(days[24]) == 1) {
    const windowElement = document.getElementById("window-day-01")
    windowElement.classList.toggle("window-is-test")
  }
