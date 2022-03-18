// Load VN Map Covid-19
(async () => {
  const topology = await fetch("json/covid-data-vn.json").then((response) =>
    response.json()
  );

  // Dont have api, i use fake api date 03/18/2022
  const data = [
    ["vn-qn", 214691],
    ["vn-kh", 105780],
    ["vn-tg", 35833],
    ["vn-bv", 56753],
    ["vn-bu", 42924],
    ["vn-hc", 579280],
    ["vn-br", 68099],
    ["vn-st", 33047],
    ["vn-pt", 208376],
    ["vn-yb", 63445],
    ["vn-hd", 301898],
    ["vn-bn", 247471],
    ["vn-317", 147840],
    ["vn-nb", 73210],
    ["vn-hm", 50707],
    ["vn-ho", 139794],
    ["vn-vc", 223134],
    ["vn-318", 916948],
    ["vn-bg", 208000],
    ["vn-tb", 131389],
    ["vn-ld", 53876],
    ["vn-bp", 93243],
    ["vn-py", 36061],
    ["vn-bd", 95348],
    ["vn-724", 40247],
    ["vn-qg", 29468],
    ["vn-331", 104639],
    ["vn-dt", 48976],
    ["vn-la", 45136],
    ["vn-3623", 106887],
    ["vn-337", 16325],
    ["vn-bl", 41930],
    ["vn-vl", 68980],
    ["vn-tn", 110016],
    ["vn-ty", 132476],
    ["vn-li", 40393],
    ["vn-311", 98383],
    ["vn-hg", 73121],
    ["vn-nd", 165363],
    ["vn-328", 29024],
    ["vn-na", 315528],
    ["vn-qb", 67445],
    ["vn-723", 88532],
    ["vn-nt", 7728],
    ["vn-6365", 35254],
    ["vn-299", 13197],
    ["vn-300", 39409],
    ["vn-qt", 47580],
    ["vn-tt", 32726],
    ["vn-da", 78825],
    ["vn-ag", 37417],
    ["vn-cm", 106136],
    ["vn-tv", 59080],
    ["vn-cb", 50465],
    ["vn-kg", 36335],
    ["vn-lo", 103091],
    ["vn-db", 53801],
    ["vn-ls", 92179],
    ["vn-th", 91580],
    ["vn-307", 23079],
    ["vn-tq", 81152],
    ["vn-bi", 353694],
    ["vn-333", 74522],
  ];

  // Create the chart
  Highcharts.mapChart("map-vn", {
    chart: {
      map: topology,
    },

    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    mapNavigation: {
      enabled: true,
    },

    colorAxis: {
      minColor: "#5CC6EE",
      maxColor: "#1D3B6C",
    },

    series: [
      {
        data: data,
        name: "Số ca nhiễm",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
      },
    ],
  });
})();
