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
  new Date(2017,10,26) // ONLY USE FOR TEST: THIS DATE OBJECT CAN BE SET TO ANY DATE AND USED IN CODE BELOW FOR TEST PURPOSES
]

// FUNCTION: COMPARE CURRENT TIME WITH A SPECIFIC DATE
// IF CURRENT DATE > SPECIFIC DATE, THEN THIS FUNCTION RETURNS 2
// ELSE IF CURRENT DATE == SPECIFIC DATE, THEN THIS FUNCTION RETURNS 1
// ELSE THIS FUNCTION RETURNS 0
// NOTE: AFTER 2017-12-31 THIS FUNCTION WILL ALWAYS RETURN 0 WHEN USED FOR THE 2017 ADVENT CALENDAR
const checkCurrentTimeAndDay = (checkThisDay) => {
  if (currentTime.getFullYear() == checkThisDay.getFullYear() && // IF YEAR FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
      currentTime.getMonth() == checkThisDay.getMonth() && // AND IF MONTH FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
      currentTime.getDate() > checkThisDay.getDate()) { // AND IF DAY FROM CURRENT TIME IS MORE THAN DAY FROM SPECIFIC DATE
        return 2
      } else if (currentTime.getFullYear() == checkThisDay.getFullYear() && // IF YEAR FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
                 currentTime.getMonth() == checkThisDay.getMonth() && // AND IF MONTH FROM CURRENT TIME IS EQUAL TO YEAR FROM SPECIFIC DATE
                 currentTime.getDate() == checkThisDay.getDate()) { // AND IF DAY FROM CURRENT TIME IS EQUAL TO DAY FROM SPECIFIC DATE
                   return 1
                 } else {
                   return 0
                 }
}
