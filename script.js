function test() {
  event.preventDefault();
    // Retrieving data
    var userDate = document.getElementById("date").value;
    var userTime = document.getElementById("time").value;
    var userCount = document.getElementById("number").value;

  // Storing data
  var userDates = localStorage.setItem("userDate", userDate);
  var userTimes = localStorage.setItem("userTime", userTime);
  var userCounts = localStorage.setItem("userCount", userCount);

}

function tests() {
  event.preventDefault();

  var firstNames = document.getElementById("firstName").value;
  var lastNames = document.getElementById("lastName").value;
  var emails = document.getElementById("email").value;
  var phoneNumbers = document.getElementById("phoneNumber").value;
  var Company = document.getElementById("company").value;
  var natural_events = document.getElementById("natural_event").value;
  var event_dates = document.getElementById("event_date").value;
  var start_times = document.getElementById("start_time").value;
  var end_times = document.getElementById("end_time").value;
  var no_of_peoples = document.getElementById("no_of_people").value;

  var userFirstNames = localStorage.setItem("firstNames", firstNames);
  var userLastNames = localStorage.setItem("lastNames", lastNames);
  var userEmails = localStorage.setItem("emails", emails);
  var userPhoneNumbers = localStorage.setItem("phoneNumbers", phoneNumbers);
  var userCompany = localStorage.setItem("Company", Company);
  var userNatural_events = localStorage.setItem("natural_events", natural_events);
  var userEvent_dates = localStorage.setItem("event_dates", event_dates);
  var userStart_times = localStorage.setItem("start_times", start_times);
  var userEnd_times = localStorage.setItem("end_times", end_times);
  var userNo_of_peoples = localStorage.setItem("no_of_peoples", no_of_peoples);

  
}