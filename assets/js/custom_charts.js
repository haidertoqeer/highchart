let example1 = [
 {
   "FIELD1": "1-Feb-21",
   "Sinopharm": 50,
   "Moderna": 40,
   "Astrazeneca": 80
 },
 {
   "FIELD1": "2-Feb-21",
   "Sinopharm": 200,
   "Moderna": 250,
   "Astrazeneca": 59
 },
 {
   "FIELD1": "3-Feb-21",
   "Sinopharm": 300,
   "Moderna": 380,
   "Astrazeneca": 78
 },
 {
   "FIELD1": "4-Feb-21",
   "Sinopharm": 500,
   "Moderna": 400,
   "Astrazeneca": 70
 },
 {
   "FIELD1": "5-Feb-21",
   "Sinopharm": 100,
   "Moderna": 239,
   "Astrazeneca": 69
 },
 {
   "FIELD1": "6-Feb-21",
   "Sinopharm": 23,
   "Moderna": 52,
   "Astrazeneca": 68
 },
 {
   "FIELD1": "7-Feb-21",
   "Sinopharm": 68,
   "Moderna": 64,
   "Astrazeneca": 67
 }
]

var abcc = [];
var seriessinopharm  = [];
var seriesModerna  = [];
var seriesAstrazeneca  = [];
for (var i = 0; i < example1.length; i++) {
	abcc[i] = example1[i].FIELD1;
}
for (var i = 0; i < example1.length; i++) {
	seriessinopharm[i] = example1[i].Sinopharm;
}
for (var i = 0; i < example1.length; i++) {
	seriesModerna[i] = example1[i].Moderna;
}
for (var i = 0; i < example1.length; i++) {
	seriesAstrazeneca[i] = example1[i].Astrazeneca;
}
//console.log(abcc);
        Highcharts.chart('stock_status', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Last 7 Days Stock Status'
    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
    xAxis: {
        categories: 
//            '1-Feb-21',
//            '2-Feb-21',
//            '3-Feb-21',
//            '4-Feb-21',
//            '5-Feb-21',
//            '6-Feb-21',
//            '7-Feb-21'
            abcc,
            crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
             
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
           
    series: [
        
        {
        name: 'Sinopharm',
        data:  seriessinopharm , crosshair: true, 

    }, {
        name: 'Moderna',
        data:  seriesModerna , crosshair: true,

    }, {
        name: 'Astazeneca',
        data:  seriesAstrazeneca , crosshair: true,

    }
    ]
});
        
        
        // Pie Chart
        
        Highcharts.chart('stock_share', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Stock Share by Product'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Sinopharm',
            y: 39
        }, {
            name: 'Moderna',
            y: 45
        }, {
            name: 'Astazeneca',
            y: 16
        }]
    }]
});
        
        // Persons Vaccinated
        
        Highcharts.chart('persons_vaccinated', {
    chart: {
        type: 'line'
    },
            
    title: {
        text: 'Number of Persons Vaccinated'
    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
    xAxis: {
        categories: ['Feb-21','Mar-21','Apr-21','May-21','Jun-21','Jul-21','Aug-21','Sep-21','Oct-21','Nov-21','Dec-21','Jan-22',]
    },
    yAxis: {
        title: false
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
         showInLegend: false,       
        
        data: [10,15,30,50,70,90,70,130,150,170,190,180]
    }

            ]
});
        
        
     
        $(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'donut_chart',
            type:'pie'        
        },
         title: {
        text: 'Federal EPI Stock Share by Product'
    },

        
        plotOptions: {
            series: {
                 innerSize: '50%',
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return Math.round(this.percentage*100)/100 + ' %';
                    },
                    distance: -30,
                    color:'white'
                }
            }
        },
        
        series: [{

             data: [
            ['Sinopharm', 39, false],
            ['Moderna', 45, false],
            ['Astrazeneca', 16, false]
        ],
        showInLegend: true
        }]
    });
});
       // 3d chart
        
        Highcharts.chart('3ddonut_chart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Stock Share by Federal, Provincial, District'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
         
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 55,
            dataLabels: {
            	  distance : -15,
                  enabled: true,
                 format: '{point.percentage:.1f}%'
            }
        }
        
        
    },
    series: [{
         showInLegend: true,
        type: 'pie',
        name: 'Stock Share by Federal, Provincial, District',
        data: [
            ['Federal', 3],
            ['Province', 4],
            ['District', 59],
            ['HFs', 34]
        ]
    }]
});
    
            // District and Health Facilities Stock Balance
             
              Highcharts.chart('stock_balance', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'District and Health Facilites Stock Balance'
    },

    xAxis: {
        categories: [
           'Sinopharm',
            'Moderna',
            'Astrazeneca'
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'District',
        data: [5000,10000,50000]

    }, {
        name: 'Health Facility',
        data: [3000,5000,30000]

    }]
});
    