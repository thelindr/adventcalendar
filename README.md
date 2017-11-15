# :christmas_tree: Company Project: Advent Calendar :christmas_tree:

The final day of this sprint conveniently lands on 1st December, so it seems fitting for your newly formed company to build an advent calendar which will slowly reveal itself over the course of the build up to Christmas!

Grab a cup of warm glögg, queue up "Tänt ett ljus" on Spotify, put on a warm pair of socks, and gather 'round the fireplace. This one's going to bring out the holiday spirit :santa:

At the end of the sprint, we'll help you to deploy your sites so you can share the joy with your friends and family and they can watch a new surprise unfold each day they re-visit your site! :gift:

## How to complete this project

The idea of this project is to create a page which looks super christmasey and festive. When a visitor lands on the page, they'll see 24 windows. After a short delay (to give the visitor a moment to get into the christmas spirit, and to build up a little suspense), the window for the current date will open, and a small "present" will be shown!

This sprint, we have Kivra helping us out, and apparently they're [mad about cookies](https://www.instagram.com/kivracookies/). They're going to give you some festive :cookie: cookie recipes :cookie:, which will be the presents behind the windows in the calendar.

The page should be built something like this:

### The "calendar" view.

The page needs some base design with 24 "windows" - one for each day leading up to Christmas. If a day is in the future, its window should be closed. If it is in the past, its window should be open.

### Presents.

Each present recipe should have a unique design. Try experimenting with different layouts, fonts colours, and other fun effects to make each one feel special.

---

## How to approach this as a team

During your sprint planning, your company should divide the 24 days of Advent between you, so you each have around 6 days - or recipes - to style up and decide how to display.

We suggest starting by creating each day's design in a separate file, so that its simpler to test and build them without having conflicts with other people's days.

Eventually, your team will need to pull the days together into the calendar view. We'll be helping you with some ideas for how to do this along the way, so don't worry if it feels daunting for now. You should, however, bear this in mind with how you build and structure your days. **It's strongly advised to keep an eye on your CSS specificity**. For example, if you're building the recipe for December 7th, you could create a container `div` with a class of `dec-7`. Then, in your CSS, always prefix your styles with `dec-7`. For example, you could have something like `.dec-7 .title { background: red; }`, etc..

---

### :boom: Success!

After completing this project, you should be feeling super festive, for starters. You should also feel a little more comfortable working as a team, and using GitHub. You should feel comfortable using simple JavaScript to control the DOM - choosing what present to show when. Your knowledge of HTML and CSS should be growing.
