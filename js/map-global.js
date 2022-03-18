// Load Global Map Covid-19
function loadGlobalMap() {
  $.get("https://corona.lmao.ninja/v2/countries").then(function (
    countriesResp
  ) {
    const data = countriesResp;

    var tablee = [];
    $.each(data, function (index) {
      tablee[index] = {};
      tablee[index]["code"] = data[index].countryInfo.iso2;
      tablee[index]["name"] = data[index].country;
      tablee[index]["cases"] = data[index].cases;
      tablee[index]["deaths"] = data[index].deaths;
      tablee[index]["recoveries"] = data[index].recovered;
    });
    var ob = procces(tablee);
    myMap(ob);
  });

  function myMap(data) {
    var mymap = $("#map-global").mapael({
      map: {
        name: "world_countries_mercator",
        defaultArea: {
          attrs: {
            stroke: "#fff",
            "stroke-width": 1,
          },
        },
        zoom: {
          enabled: true,
        },
      },
      legend: {
        area: {
          display: true,
          title: "Territory of total confirmed cases",
          slices: data.case_legendAreaColors,
        },
        plot: {
          display: true,
          title: "Region of total confirmed cases",
          slices: data.case_legendPlotColors,
        },
      },
      plots: data.case_cityPlots,
      areas: data.case_countryAreas,
    });
    return mymap;
  }
}
