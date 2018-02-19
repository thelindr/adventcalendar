// FUNCTION: SET A WINDOW TO BE OPEN AND ADD ITS LINK USING 'onclick'
const setWindowOpen = (openThisWindow, dayString) => {
  openThisWindow.classList.add("window-is-open")
  openThisWindow.onclick = () => {
    window.location.href = `./days/${dayString}.html`
  }
}

// ***START*** ITERATE OVER AN ARRAY OF DAYS TO CHECK IF THE WINDOW FOR A DAY SHALL BE OPEN OR OPENABLE
// NOTE: THIS WILL ONLY WORK WHEN CURRENT TIME IS 1--31 DEC 2017. AFTER 31 DEC 2017, ALL WINDOWS WILL REMAIN CLOSED.
days.forEach((day, index) => { // FOR EACH DAY IN THE ARRAY (SEE 'script.js')
  const actualDay = index + 1 // GET THE ACTUAL NUMBER OF THIS DAY, E.G. 1 for 'days[0]'
  const dayString = (actualDay < 10 ? "0" + actualDay : actualDay) // IF 'actualDay' < 10, THEN ADD "0" BEFORE THE NUMBER OF THE DAY, E.G. "01"
  const windowElement = document.getElementById(`window-day-${dayString}`) // GET THE WINDOW ELEMENT FOR THIS DAY
  if (checkCurrentTimeAndDay(day) == 2) { //NOTE: THIS FUNCTION CAN BE FOUND IN 'script.js'
    setWindowOpen(windowElement, dayString) // SET THE WINDOW TO BE OPEN
  } else if (checkCurrentTimeAndDay(day) == 1) { //NOTE: THIS FUNCTION CAN BE FOUND IN 'script.js'
      windowElement.classList.add("window-is-openable") // SET THE WINDOW TO BE OPENABLE
      windowElement.onclick = () => { // IF AN OPENABLE WINDOW IS OPENED
        windowElement.classList.remove("window-is-openable") // WINDOW IS NO LONGER OPENABLE
        setWindowOpen(windowElement, dayString) // SET THE WINDOW TO BE OPEN
      }
    }
})
