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
//         windowElement.classList.toggle("window-is-openable")
//         windowElement.onclick = () => {
//           windowElement.classList.remove("window-is-openable")
//           windowElement.classList.add("window-is-open")
//           windowElement.onclick = () => {
//             window.location.href = "./days/01.html"
//           }
//         }
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
    windowElement.classList.toggle("window-is-openable")
    windowElement.onclick = () => {
      windowElement.classList.remove("window-is-openable")
      windowElement.classList.add("window-is-open")
      windowElement.onclick = () => {
        window.location.href = "./days/01.html"
      }
    }
  }
