function updateTime() {
  /*Santiago*/
  let santiagoElement = document.querySelector("#santiago");
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(".date");
    let santiagoTimeElement = santiagoElement.querySelector(".time");
    let santiagoTime = moment().tz("America/santiago");

    santiagoDateElement.innerHTML = santiagoTime.format("Do MMMM YYYY");
    santiagoTimeElement.innerHTML = santiagoTime.format(
      "h:mm:ss[<small>]A[</small>]",
    );
  }

  /*santiagoTimeElement.innerHTML = `${santiagoTime.format("h:mm:ss")} <small>${santiagoTime.format("A")}</small>`;*/

  /*Melbourne*/
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("Do MMMM YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss[<small>]A[</small>]",
    );
  }

  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format("Do MMMM YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss[<small>]A[</small>]",
    );
  }
}

/*updateTime();
setInterval(updateTime, 100);*/

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  /*console.log(cityTimeZone);*/
  let cityTime = moment().tz(cityTimeZone);

  let cityListElement = document.querySelector("#city-list");
  cityListElement.innerHTML = `
    <div id="city-list">
      <div class="city" id="santiago">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>
      <a href="/">All cities</a>
      `;
}

let cityDropdownElement = document.querySelector("#city-dropdown");
cityDropdownElement.addEventListener("change", updateCity);
