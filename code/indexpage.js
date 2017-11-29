// CHECK ALL DAYS---WILL ONLY WORK WHEN CURRENT TIME IS 1--31 DEC
// days.forEach((day, index) => {
//   const actualDay = index + 1
//   const dayString = (actualDay < 10 ? "0" + actualDay : actualDay)
//   const windowElement = document.getElementById(`window-day-${dayString}`)
//   if (checkCurrentTimeAndDay(day) == 2) {
//     windowElement.classList.add("window-is-open")
//     windowElement.onclick = () => {
//       window.location.href = `./days/${dayString}.html`
//     }
//   } else if (checkCurrentTimeAndDay(day) == 1) {
//       windowElement.classList.add("window-is-openable")
//       windowElement.onclick = () => {
//         windowElement.classList.remove("window-is-openable")
//         windowElement.classList.add("window-is-open")
//         windowElement.onclick = () => {
//           window.location.href = `./days/${dayString}.html`
//         }
//       }
//     }
// })

// USE FOR TEST: APPLIED TO WINDOW FOR DAY 1
if (checkCurrentTimeAndDay(days[24]) == 2) {
  const windowElement = document.getElementById("window-day-01")
  windowElement.classList.add("window-is-open")
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
