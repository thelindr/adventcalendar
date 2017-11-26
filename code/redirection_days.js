// FUNCTION: CHECK IF USER SHALL BE REDIRECTED
// const redirectionCheck = (day) => {
//   if (checkCurrentTimeAndDay(day) == 0) {
//     window.location.href = "../index.html"
//     }
// }

const redirectionCheck = () => {
  const indexOfFirstCharInDate = window.location.href.lastIndexOf("/") + 1
  const indexOfSecondCharInDate = window.location.href.lastIndexOf("/") + 2
  const firstCharInDate = window.location.href.charAt(indexOfFirstCharInDate)
  const secondCharInDate = window.location.href.charAt(indexOfSecondCharInDate)
  const dateInURL = `${firstCharInDate}${secondCharInDate}`
  if (checkCurrentTimeAndDay(new Date(2017,11,dateInURL)) == 0) {
    window.location.href = "../index.html"
    }
}

redirectionCheck()
