(async () => {
  const topology = await fetch("json/covid-data-vn.json").then((response) =>
    response.json()
  );
  const data = [
    ["vn-qn", 16153],
    ["vn-kh", 95694],
    ["vn-tg", 35678],
    ["vn-bv", 49221],
    ["vn-bu", 37584],
    ["vn-hc", 562351],
    ["vn-br", 52384],
    ["vn-st", 32661],
    ["vn-pt", 135209],
    ["vn-yb", 45464],
    ["vn-hd", 113502],
    ["vn-bn", 20579],
    ["vn-317", 82415],
    ["vn-nb", 56617],
    ["vn-hm", 34639],
    ["vn-ho", 109548],
    ["vn-vc", 131336],
    ["vn-318", 522012],
    ["vn-bg", 144925],
    ["vn-tb", 81017],
    ["vn-ld", 38947],
    ["vn-bp", 77381],
    ["vn-py", 27052],
    ["vn-bd", 76019],
    ["vn-724", 2857],
    ["vn-qg", 24212],
    ["vn-331", 103248],
    ["vn-dt", 48504],
    ["vn-la", 43905],
    ["vn-3623", 92035],
    ["vn-337", 16049],
    ["vn-bl", 39861],
    ["vn-vl", 59403],
    ["vn-tn", 99254],
    ["vn-ty", 104631],
    ["vn-li", 23366],
    ["vn-311", 67046],
    ["vn-hg", 61142],
    ["vn-nd", 108717],
    ["vn-328", 22673],
    ["vn-na", 183282],
    ["vn-qb", 45312],
    ["vn-723", 61056],
    ["vn-nt", 7431],
    ["vn-6365", 2465],
    ["vn-299", 9421],
    ["vn-300", 37042],
    ["vn-qt", 29886],
    ["vn-tt", 30763],
    ["vn-da", 69292],
    ["vn-ag", 36587],
    ["vn-cm", 84948],
    ["vn-tv", 51771],
    ["vn-cb", 3262],
    ["vn-kg", 35557],
    ["vn-lo", 53787],
    ["vn-db", 32257],
    ["vn-ls", 60099],
    ["vn-th", 83732],
    ["vn-307", 12285],
    ["vn-tq", 52791],
    ["vn-bi", 328041],
    ["vn-333", 46466],
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
