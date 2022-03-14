// COVID-19 Data
function procces(data_list) {
  const countryData = data_list;

  // Areas or countries
  function groupAreas(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj["code"];
      if (!acc[key]) {
        acc[key] = {};
      }
      acc[key].value = obj[property];
      acc[key].attrs = { href: "#" };
      acc[key].tooltip = {
        content:
          "<strong>" +
          obj["name"] +
          "</strong><br />Ca nhiễm : " +
          obj["cases"] +
          "<br />Tử vong : " +
          obj["deaths"] +
          "<br />Ca khỏi : " +
          obj["recoveries"],
      };
      return acc;
    }, {});
  }
  var case_countryAreas = arr();
  function arr() {
    var at = groupAreas(countryData, "cases");
    return at;
  }
  var deathCountryAreas = groupAreas(countryData, "deaths");
  var recoveryCountryAreas = groupAreas(countryData, "recoveries");

  // VMap plugin
  function groupVMap(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj["code"].toLowerCase();
      if (!acc[key]) {
        acc[key] = obj[property];
      }
      return acc;
    }, {});
  }

  // VMap regions
  function groupVMapRegion(objectArray, property, countryId) {
    return objectArray.reduce(function (acc, obj) {
      if (obj["country"] == countryId) {
        var key = obj["code"];
        if (!acc[key]) {
          acc[key] = obj[property];
        }
      }
      return acc;
    }, {});
  }

  // Legend area for confirmed cases by country
  var case_legendAreaColors = [
    {
      min: 100000,
      attrs: {
        fill: "#1D3B6C",
      },
      label: "100,000+ confirmed cases",
    },
    {
      min: 10000,
      max: 99999,
      attrs: {
        fill: "#2B5988",
      },
      label: "10,000-9,9999 confirmed cases",
    },
    {
      min: 1000,
      max: 9999,
      attrs: {
        fill: "#3B7DA9",
      },
      label: "1,000–9,999 confirmed cases",
    },
    {
      min: 100,
      max: 999,
      attrs: {
        fill: "#489AC5",
      },
      label: "100–999 confirmed cases",
    },
    {
      min: 10,
      max: 99,
      attrs: {
        fill: "#59BFE7",
      },
      label: "10–99 confirmed cases",
    },
    {
      min: 1,
      max: 9,
      attrs: {
        fill: "#CCE5FF",
      },
      label: "1–9 confirmed cases",
    },
    {
      min: 0,
      attrs: {
        fill: "#eeeeee",
      },
      label: "No confirmed cases or no data",
    },
  ];
  return {
    case_legendAreaColors,
    case_countryAreas,
  };
}
