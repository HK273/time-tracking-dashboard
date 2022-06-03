/* ===============================================================================
JS Testing / Examples
=================================================================================== */

// simple fetch, removes {}
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => console.log("Even simpler! parsing JSON to console", data));

// Example with getting API data: https://www.youtube.com/watch?v=uxf0--uiX0I&t=216s
const url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getAPI() {
  const response = await fetch(url);
  const jsonData = await response.json();
  const { name } = jsonData;
  console.log("satellite data", jsonData);
}
getAPI();

// Testing
const btn = document.querySelector(".daily_click");
btn.addEventListener("click", function () {
  const element = document.querySelectorAll(".daily");
  element.forEach((element) => {
    element.classList.toggle("active");
  });
});

const btntwo = document.querySelector(".weekly_click");
btntwo.addEventListener("click", function () {
  const elementtwo = document.querySelectorAll(".weekly");
  console.log("queryselectorall", elementtwo);
  const newtest = document.querySelectorAll(".daily");
  // almost getting there!
  elementtwo.forEach((elementtwo) => {
    newtest.forEach((element) => {
      element.classList.remove("active");
    });
    elementtwo.classList.add("active");
    // newtest.classList.remove("active");
  });
});

// // Event listener added to all child buttons
const btnnew = document.querySelectorAll(".child");
btnnew.forEach((element) => {
  element.addEventListener("click", function () {
    const daily = document.querySelectorAll(".daily");
    daily.forEach((newelement) => {
      newelement.classList.toggle("active");
    });
  });
});
