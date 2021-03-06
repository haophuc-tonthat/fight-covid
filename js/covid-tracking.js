vnTracking();

//Load Tracking Vietnam Funtion
function vnTracking() {
  $.get("https://corona.lmao.ninja/v2/countries").then(function (covidData) {
    const data = covidData;
    $.each(data, function (index) {
      var cases;
      var deaths;
      var recoveries;
      if (data[index].country === "Vietnam") {
        cases = data[index].cases;
        deaths = data[index].deaths;
        recoveries = data[index].recovered;
        $("#cases").text(addCommas(cases));
        $("#deaths").text(addCommas(deaths));
        $("#recoveries").text(addCommas(recoveries));
      }
    });
  });
}

// Load Tracking Global Funtion
function globalTracking() {
  $.get("https://disease.sh/v3/covid-19/all").then(function (covidData) {
    const data = covidData;
    $.each(data, function () {
      var cases;
      var deaths;
      var recoveries;
      cases = data.cases;
      deaths = data.deaths;
      recoveries = data.recovered;
      $("#cases").text(addCommas(cases));
      $("#deaths").text(addCommas(deaths));
      $("#recoveries").text(addCommas(recoveries));
    });
  });
}

//Format number
function addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "." + "$2");
  }
  return x1 + x2;
}

//Change data onclick Viet Nam button
$("#vietnam").click(function () {
  vnTracking();
  $("#vietnam").css({ backgroundColor: "#1d3b6c" });
  $("#global").css({ backgroundColor: "#5cc6ee" });
  $("#map-vn").css({ display: "block" });
  $("#map-global").css({ display: "none" });
});

//Change data onclick Global button
$("#global").click(function () {
  globalTracking();
  loadGlobalMap();
  $("#vietnam").css({ backgroundColor: "#5cc6ee" });
  $("#global").css({ backgroundColor: "#1d3b6c" });
  $("#map-vn").css({ display: "none" });
  $("#map-global").css({ display: "block" });
});
