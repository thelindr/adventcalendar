// GET "DD" IN (...)/days/DD.html FROM THE URL OF THE CURRENT PAGE
const indexOfFirstCharInDate = window.location.href.lastIndexOf("/") + 1 // GET THE **INDEX** OF THE FIRST CHAR IN "DD" IN THE URL
const firstCharInDate = window.location.href.charAt(indexOfFirstCharInDate) // GET THE FIRST **CHAR** IN "DD"
const indexOfSecondCharInDate = window.location.href.lastIndexOf("/") + 2 // GET THE **INDEX** OF THE SECOND CHAR IN "DD" IN THE URL
const secondCharInDate = window.location.href.charAt(indexOfSecondCharInDate) // GET THE SECOND **CHAR** IN "DD"
const dateInURL = `${firstCharInDate}${secondCharInDate}` // "DD"

// IF CURRENT DATE < 2017-11-DD (DD DEC 2017), THEN HIDE HTML CONTENT, PLAY AUDIO AND REDIRECT USER TO INDEX PAGE
if (checkCurrentTimeAndDay(new Date(2017,11,dateInURL)) == 0) { // NOTE: AFTER 2017-12-31 THIS WILL ALWAYS BE TRUE
  document.getElementsByTagName("html")[0].style.display = "none" // DISPLAY NONE (CONTENT)
  const redirectionAudio = new Audio("../music/fail_1.mp3")
  redirectionAudio.play() // PLAY AUDIO
  redirectionAudio.addEventListener("ended", () => { // WHEN AUDIO HAS ENDED
    window.location.href = "../index.html" // REDIRECTION
  })
}
