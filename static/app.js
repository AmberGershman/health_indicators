
var regions = [];

var tbody = d3.select("tbody");

d3.csv("/clean_csv/water.csv").then(function (drinkingWater) {
    drinkingWater.forEach(function (instance) {
        var row = tbody.append("tr")
        Object.entries(instance).forEach(([key, value]) => {
            //console.log(value)
            var cell = row.append("td")
            cell.text(value)
        })
    })
});

