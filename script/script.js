/* ===============================================================================
JS for time tracking dashbaord:
=================================================================================== */

// Fetch and parse json data
async function fetchData() {
  await fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      // Use dot notation for data granularity
      // console.log(data[1].timeframes.daily.current);
      const html = data
        .map((stats) => {
          return `<article class="card ${stats.title}">
            <img class="card_icon" src="images/icon-${stats.title}.svg" alt="work icon" />
            <div class="card_content">
              <div class="inner-card-content">
                <div class="flex-one">
                  <h1 class="card_content_header">${stats.title}</h1>
                  <img
                    class="ellipsis"
                    src="images/icon-ellipsis.svg"
                    alt="elipsis"
                  />
                </div>
                <div class="item daily active">
                <h2 class="card_content_desc">${stats.timeframes.daily.current} Hrs</h2>
                <p class="card_content_prev">Last week - ${stats.timeframes.daily.previous} hrs</p>
                </div>
                <div class="item weekly">
                <h2 class="card_content_desc">${stats.timeframes.weekly.current} Hrs</h2>
                <p class="card_content_prev">Last week - ${stats.timeframes.weekly.previous} hrs</p>
                </div>
                <div class="item monthly">
                <h2 class="card_content_desc">${stats.timeframes.monthly.current} Hrs</h2>
                <p class="card_content_prev">Last week - ${stats.timeframes.monthly.previous} hrs</p>
                </div>
              </div>
            </div>
          </article>
          
              `;
          // join gives us back a string
        })
        .join("");

      const card = document.querySelector(".card");
      card.insertAdjacentHTML("afterend", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Toggle between Daily / Weekly / Monthly data
async function toggleData() {
  await fetchData();

  // Duplicated - should be refactored

  // Daily
  const btndaily = document.querySelector(".daily_click");
  btndaily.addEventListener("click", function () {
    const daily = document.querySelectorAll(".daily");
    const weekly = document.querySelectorAll(".weekly");
    const monthly = document.querySelectorAll(".monthly");
    daily.forEach((element) => {
      element.classList.add("active");
    });
    weekly.forEach((element) => {
      element.classList.remove("active");
    });
    monthly.forEach((element) => {
      element.classList.remove("active");
    });
  });

  // Weekly
  const btnweekly = document.querySelector(".weekly_click");
  btnweekly.addEventListener("click", function () {
    const daily = document.querySelectorAll(".daily");
    const weekly = document.querySelectorAll(".weekly");
    const monthly = document.querySelectorAll(".monthly");
    weekly.forEach((element) => {
      element.classList.add("active");
    });
    daily.forEach((element) => {
      element.classList.remove("active");
    });
    monthly.forEach((element) => {
      element.classList.remove("active");
    });
  });

  // Monthly
  const btnmonthly = document.querySelector(".monthly_click");
  btnmonthly.addEventListener("click", function () {
    const daily = document.querySelectorAll(".daily");
    const weekly = document.querySelectorAll(".weekly");
    const monthly = document.querySelectorAll(".monthly");
    monthly.forEach((element) => {
      element.classList.add("active");
    });
    weekly.forEach((element) => {
      element.classList.remove("active");
    });
    daily.forEach((element) => {
      element.classList.remove("active");
    });
  });
}
toggleData();
