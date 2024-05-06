/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.34555555555555556, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.29, 500, 1500, "POST products.json"], "isController": false}, {"data": [0.18, 500, 1500, "PUT product/{id}.json"], "isController": false}, {"data": [0.6225, 500, 1500, "GET categories/{id}.json"], "isController": false}, {"data": [0.335, 500, 1500, "PUT offers/{id}.json-1"], "isController": false}, {"data": [0.575, 500, 1500, "GET Categories.json"], "isController": false}, {"data": [0.5625, 500, 1500, "PUT offers/{id}.json-0"], "isController": false}, {"data": [0.07, 500, 1500, "PUT offers/{id}.json"], "isController": false}, {"data": [0.4575, 500, 1500, "GET user/{id}/offers.json"], "isController": false}, {"data": [0.0375, 500, 1500, "PUT profiles.json"], "isController": false}, {"data": [0.4575, 500, 1500, "GET product.json"], "isController": false}, {"data": [0.0675, 500, 1500, "POST offers.json"], "isController": false}, {"data": [0.5525, 500, 1500, "GET products/{id}.json"], "isController": false}, {"data": [0.435, 500, 1500, "DELETE products/{id}.json"], "isController": false}, {"data": [0.345, 500, 1500, "POST offers.json-1"], "isController": false}, {"data": [0.165, 500, 1500, "POST users.json  "], "isController": false}, {"data": [0.0975, 500, 1500, "POST users/sign_in.json"], "isController": false}, {"data": [0.5825, 500, 1500, "POST offers.json-0"], "isController": false}, {"data": [0.3875, 500, 1500, "GET profiles.json"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3600, 0, 0.0, 1410.3063888888908, 24, 6007, 1285.0, 2427.8, 2867.8999999999996, 3817.9199999999983, 16.963208685162847, 96.80593603338926, 33.03100346656127], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["POST products.json", 200, 0, 0.0, 1393.104999999999, 500, 2164, 1415.0, 1913.2000000000003, 2002.55, 2133.3500000000004, 1.0049796742860875, 2.0371693695385638, 7.512223065288505], "isController": false}, {"data": ["PUT product/{id}.json", 200, 0, 0.0, 1591.0199999999995, 734, 2333, 1685.0, 2030.0, 2145.7, 2241.8900000000003, 1.003461943705785, 2.0352638477748233, 13.20893998356831], "isController": false}, {"data": ["GET categories/{id}.json", 200, 0, 0.0, 744.2099999999998, 131, 1907, 720.5, 1243.5, 1415.1499999999999, 1811.3400000000015, 1.0076480486895538, 0.717358815912778, 0.178109664856259], "isController": false}, {"data": ["PUT offers/{id}.json-1", 200, 0, 0.0, 1396.94, 371, 3346, 1319.0, 2138.4, 2350.5499999999993, 3196.440000000005, 1.0355879809658928, 20.841086758972075, 0.416662351716746], "isController": false}, {"data": ["GET Categories.json", 200, 0, 0.0, 820.6800000000004, 192, 2073, 770.5, 1399.2, 1557.8, 1951.7400000000011, 1.002179740936537, 1.0471995339864204, 0.1751857164332423], "isController": false}, {"data": ["PUT offers/{id}.json-0", 200, 0, 0.0, 902.0649999999996, 24, 2661, 733.0, 1784.8000000000002, 2065.2, 2569.4900000000034, 1.034532701578697, 1.1140421972957315, 0.5031223490099521], "isController": false}, {"data": ["PUT offers/{id}.json", 200, 0, 0.0, 2299.2399999999993, 398, 6007, 2111.0, 3531.7, 3924.3999999999996, 5340.240000000006, 1.0325511758176515, 21.8918797916828, 0.917599189447327], "isController": false}, {"data": ["GET user/{id}/offers.json", 200, 0, 0.0, 1061.125, 38, 2254, 1003.5, 1731.0, 2018.6999999999998, 2249.5800000000004, 1.0259251279841597, 1.1303510811968442, 0.4358178033917085], "isController": false}, {"data": ["PUT profiles.json", 200, 0, 0.0, 2651.89, 1209, 4685, 2596.0, 3693.6000000000004, 4081.5999999999995, 4629.590000000001, 0.974445175278326, 1.3127793917025994, 7.452378750091354], "isController": false}, {"data": ["GET product.json", 200, 0, 0.0, 1085.3000000000006, 249, 2070, 1083.0, 1603.7, 1716.9999999999998, 1914.3300000000006, 1.0117207852976735, 2.0808201688435526, 0.4910402639579529], "isController": false}, {"data": ["POST offers.json", 200, 0, 0.0, 2157.6250000000023, 391, 4281, 2117.0, 2934.9, 3611.2, 4270.070000000001, 1.0196590260216982, 21.60850155848509, 0.9499557722897463], "isController": false}, {"data": ["GET products/{id}.json", 200, 0, 0.0, 831.3950000000003, 130, 2151, 728.0, 1362.0000000000005, 1627.8999999999992, 2055.800000000001, 1.0189680910142298, 2.0055063284287002, 0.4288820773702472], "isController": false}, {"data": ["DELETE products/{id}.json", 200, 0, 0.0, 1097.5449999999998, 32, 2598, 1040.5, 1727.0, 2048.1499999999996, 2507.500000000003, 1.0389394506088185, 0.8922907121410465, 0.459608956177534], "isController": false}, {"data": ["POST offers.json-1", 200, 0, 0.0, 1337.1050000000002, 329, 2419, 1300.0, 1963.0000000000002, 2130.7, 2402.7200000000003, 1.0222126815705277, 20.561413779235284, 0.41128088360064197], "isController": false}, {"data": ["POST users.json  ", 200, 0, 0.0, 1799.5749999999998, 554, 3417, 1695.0, 2603.8, 2754.7, 3122.4200000000005, 0.9770109327523375, 1.6823240937612969, 0.29291245737789806], "isController": false}, {"data": ["POST users/sign_in.json", 200, 0, 0.0, 2086.9550000000013, 744, 3436, 2117.5, 2910.1, 3073.899999999999, 3316.4800000000014, 0.973183917162585, 1.6757058092389217, 0.2756087265401852], "isController": false}, {"data": ["POST offers.json-0", 200, 0, 0.0, 820.1649999999996, 62, 2440, 711.5, 1368.8, 1775.0, 2104.210000000002, 1.0213722135689298, 1.1002991503459898, 0.5406091208538671], "isController": false}, {"data": ["GET profiles.json", 200, 0, 0.0, 1309.5749999999994, 177, 3818, 1199.0, 2182.8, 2829.0499999999997, 3613.670000000001, 0.9860911838517707, 1.328054895079898, 0.4092663604853541], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3600, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
