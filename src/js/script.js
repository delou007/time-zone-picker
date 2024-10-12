import utc from "dayjs/plugin/utc";
import MicroModal from "micromodal";

var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
var MicroModal = require("micromodal");

document.getElementById("modal-open").addEventListener("click", function () {
  MicroModal.init();
  MicroModal.show("modal-1");
});

function CheckIfTheModalIsClosed() {
  if ((document.getElementById("modal").style.display = "none")) {
    dropdownEl.style.display = "none";
  }
}

var dayjs = require("dayjs");

dayjs.extend(utc);
dayjs.extend(timezone);

var myTimezone = dayjs.tz.guess();
var myTimeDayJs = dayjs().format("HH:mm:ss");
var myDateDayJs = dayjs().format("dddd, D MMMM, YYYY");

document.getElementById("time").innerHTML = myTimeDayJs;
document.getElementById("date").innerHTML = myDateDayJs;
document.getElementById("timezone").innerHTML = myTimezone;

const selectEl = document.getElementById("dropdownSelect");

window.changeTime = function () {
  const selectedValue = selectEl.value;
  console.log(selectedValue);

  var myTimezone = selectedValue;
  var myTimeDayJs = dayjs().tz(myTimezone).format("HH:mm:ss");
  var myDateDayJs = dayjs().tz(myTimezone).format("dddd, D MMMM, YYYY");

  document.getElementById("time").innerHTML = myTimeDayJs;
  document.getElementById("date").innerHTML = myDateDayJs;
  document.getElementById("timezone").innerHTML = myTimezone;
};
