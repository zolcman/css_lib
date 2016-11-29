 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     2],
          ['Eat',      1],
          ['Commute',  2],
          ['Watch TV', 3],
          ['Sleep',    3],
          ['Sleep',    3],
          ['Sleep',    1],
          ['Sleep',    2],
          ['Sleep',    1]
        ]);

        var options = {
         colors: ['#ed5565', '#cabcaf', '#ec87c0', '#ac92ec', '#4fc1e9', '#48cfad','#a0d468','#ffce54','#fc6e51'],
          pieHole: 0.55,
          legend: 'none',
          width: '100%',
          pieSliceBorderColor:'transparent',
          
           pieSliceBorder: 0,
          enableInteractivity : false,
          height: '101%',
          pieSliceTextStyle: {
              color:'transparent'
          },
            chartArea:{
                 left:0,
                 top: 0,
                 width: '100%',
                height: '101%',
}
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }