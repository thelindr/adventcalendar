# :christmas_tree: Company Project: Advent Calendar :christmas_tree:

The final day of this sprint conveniently lands on 1st December, so it seems fitting for your newly formed company to build an advent calendar which will slowly reveal itself over the course of the build up to Christmas!

Grab a cup of warm glögg, queue up "Tänt ett ljus" on Spotify, put on a warm pair of socks, and gather 'round the fireplace. This one's going to bring out the holiday spirit :santa:

At the end of the sprint, we'll help you to deploy your sites so you can share the joy with your friends and family and they can watch a new surprise unfold each day they re-visit your site! :gift:

## How to complete this project

The idea of this project is to create a page which looks super christmasey and festive. When a visitor lands on the page, they'll see 24 windows. Each day, a new window is "opened" and your visitor should be able to click through to see the a small "present"!

This sprint, we have Kivra helping us out, and apparently they're [mad about cookies](https://www.instagram.com/kivracookies/). They're going to give you some festive :cookie: cookie recipes :cookie:, which will be the presents behind the windows in the calendar.

The page should be built something like this:

### The "calendar" view.

The page needs some base design with 24 "windows" - one for each day leading up to Christmas. If a day is in the future, its window should be closed. If it is in the past, its window should be open. The design should update to reflect whether a window is opened or closed.

### Presents.

When clicking a opened window from the calendar, you should navigate to the "present" page. Each present recipe should have a unique design. Try experimenting with different layouts, fonts colours, and other fun effects to make each one feel special.

If the visitor tries to cheat and manually navigate to a day in the future, they should be redirected back to the calendar. No peeking

---

## How to approach this as a team

During your sprint planning, your company should divide the 24 days of Advent between you, so you each have around 6 days - or recipes - to style up and decide how to display.

Create a new page for each recipe, with a slightly different design from the other recipes. One suggestion is to have one common stylesheet which contains some core CSS which can be shared between pages, but then to use a seperate stylesheet for the current "present" which the visitor is looking at. This is up to your team to decide during your planning.

**Don't forget to keep an eye on your CSS specificity**. For example, if you're building the recipe for December 7th, you could create a container `div` with classes like `present dec-7`. Then, in your CSS, always prefix your styles with `dec-7`. For example, you could have something like `.present.dec-7 .title { background: red; }`, etc..

---

### :boom: Success!

After completing this project, you should be feeling super festive, for starters. You should also feel a little more comfortable working as a team, and using GitHub. You should feel comfortable using simple JavaScript to control the DOM - choosing what present to show when. Your knowledge of HTML and CSS should be growing.

### :runner: Stretch Goals

Done with the main task? Try to come up with some fun stretch goals within your company. Here's some ideas:

1. Make some (or all) of the windows have some fitting music inside them.
1. Make an "Adventsljusstake" on the calendar page which is updated each Sunday until Christmas.
1. Make it so when a "present" page loads, it has a small animation, as if unwrapping a present in some way. Perhaps you could make it fade in, or fold open, or flip over, or some other creative design!
