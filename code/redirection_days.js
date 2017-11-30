// GET "DD" IN (...)/days/DD.html FROM THE URL OF THE CURRENT PAGE
const indexOfFirstCharInDate = window.location.href.lastIndexOf("/") + 1 // GET THE **INDEX** OF THE FIRST CHAR IN "DD" IN THE URL
const firstCharInDate = window.location.href.charAt(indexOfFirstCharInDate) // GET THE FIRST **CHAR** IN "DD"
const indexOfSecondCharInDate = window.location.href.lastIndexOf("/") + 2 // GET THE **INDEX** OF THE SECOND CHAR IN "DD" IN THE URL
const secondCharInDate = window.location.href.charAt(indexOfSecondCharInDate) // GET THE SECOND **CHAR** IN "DD"
const dateInURL = `${firstCharInDate}${secondCharInDate}` // "DD"

// IF CURRENT DATE < 2017-11-DD (DD DEC 2017), THEN REDIRECT USER TO INDEX PAGE
// NOTE: AFTER 2017-12-31 THIS WILL ALWAYS BE TRUE AND REDIRECT WILL ALWAYS OCCUR
if (checkCurrentTimeAndDay(new Date(2017,11,dateInURL)) == 0) {
  window.location.href = "../index.html"
  }
