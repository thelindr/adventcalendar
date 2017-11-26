// FUNCTION: CHECK IF USER SHALL BE REDIRECTED
const redirectionCheck = () => {
  // GET 'DD' IN /days/DD.html FROM THE URL OF THE CURRENT PAGE
  const indexOfFirstCharInDate = window.location.href.lastIndexOf("/") + 1
  const indexOfSecondCharInDate = window.location.href.lastIndexOf("/") + 2
  const firstCharInDate = window.location.href.charAt(indexOfFirstCharInDate)
  const secondCharInDate = window.location.href.charAt(indexOfSecondCharInDate)
  const dateInURL = `${firstCharInDate}${secondCharInDate}`
  // IF CURRENT DATE < 2017-12-DD (2017-11-DD), THEN REDIRECT USER TO INDEX PAGE
  // NOTE: AFTER 2017-12-31 THIS WILL ALWAYS BE TRUE AND REDIRECT WILL ALWAYS OCCUR
  if (checkCurrentTimeAndDay(new Date(2017,11,dateInURL)) == 0) {
    window.location.href = "../index.html"
    }
}

// INVOKE FUNCTION
redirectionCheck()
