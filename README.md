# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- [Add solution URL here](https://your-solution-url.com)
- [Live site](https://your-live-site-url.com](https://hk273.github.io/time-tracking-dashboard/)

### What I learned

```css
/* media queries min-wdth >= // max-width <= */
/* Locks the grid template and column size past certain width */
@media screen and (min-width: 1440px) {
  .content {
    grid-template-columns: repeat(4, 34rem);
    width: 80vw;
    min-height: 100vh;
    padding-block: 25rem;
    margin-inline: auto;
    /* background-color: red; */
  }
}
```

```JavaScript
// Simple way to parse JSON data
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => console.log("Parsing JSON to console", data));

// Event listener added to all child buttons
const btnnew = document.querySelectorAll(".child");
btnnew.forEach((element) => {
  element.addEventListener("click", function () {
    const daily = document.querySelectorAll(".daily");
    daily.forEach((newelement) => {
      newelement.classList.toggle("active");
    });
  });
});
```

### Useful resources

- [Load JSON data into tables](https://www.youtube.com/watch?v=qBg8IB3u28s)
- [Fetch](https://www.youtube.com/watch?v=5VCY9yCZnlc)
- [Fetch extended](https://www.youtube.com/watch?v=FN_ffvw_ksE)
- [JSON data to charts](https://www.youtube.com/watch?v=qZ17lr6Vn94)
- [Example with getting API data](https://www.youtube.com/watch?v=uxf0--uiX0I&t=216s)
- [JSON Parse](https://www.youtube.com/watch?v=LEBho3PUV3s)
- [Loop through event listener](https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist)
- [Add event listener to multiple buttons](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)
- [Check if element contains class](https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/)
- [Position child element relative to parent](https://tomelliott.com/html-css/css-position-child-div-parent)
- [Grid: auto-fit / auto-fill](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
