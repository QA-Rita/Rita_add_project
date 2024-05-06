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

    var data = {"OkPercent": 50.705882352941174, "KoPercent": 49.294117647058826};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.16117647058823528, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.2925, 500, 1500, "GET buyer/order"], "isController": false}, {"data": [0.0875, 500, 1500, "POST auth/register (as buyer)"], "isController": false}, {"data": [0.24, 500, 1500, "PUT buyer/order/{id}"], "isController": false}, {"data": [0.245, 500, 1500, "GET buyer/product"], "isController": false}, {"data": [0.0, 500, 1500, "POST seller/product"], "isController": false}, {"data": [0.0275, 500, 1500, "GET seller/product"], "isController": false}, {"data": [0.195, 500, 1500, "POST auth/login (as buyer)"], "isController": false}, {"data": [0.16, 500, 1500, "GET seller/category/{id}"], "isController": false}, {"data": [0.07, 500, 1500, "POST buyer/order"], "isController": false}, {"data": [0.11, 500, 1500, "DELETE seller/product/{id}"], "isController": false}, {"data": [0.2875, 500, 1500, "GET buyer/product/{id}"], "isController": false}, {"data": [0.13, 500, 1500, "POST auth/login (as seller)"], "isController": false}, {"data": [0.155, 500, 1500, "GET seller/category"], "isController": false}, {"data": [0.05, 500, 1500, "GET seller/product/{id}"], "isController": false}, {"data": [0.275, 500, 1500, "GET buyer/order/{id}"], "isController": false}, {"data": [0.1425, 500, 1500, "POST auth/register (as seller)"], "isController": false}, {"data": [0.2725, 500, 1500, "DELETE buyer/order/{id}"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3400, 1676, 49.294117647058826, 1881.4844117647053, 6, 42480, 246.5, 4300.700000000001, 10736.899999999963, 26010.55999999997, 10.599693232407626, 5.820222870241049, 6.648055988982554], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET buyer/order", 200, 100, 50.0, 386.38000000000005, 6, 1751, 258.0, 860.6, 988.6999999999999, 1731.280000000006, 0.6875262119368301, 0.5112804788963828, 0.1822884438875482], "isController": false}, {"data": ["POST auth/register (as buyer)", 200, 100, 50.0, 1203.7949999999987, 7, 6636, 386.0, 3982.1, 4238.95, 5521.95, 0.676132521974307, 0.2915161215348208, 0.8487576064908722], "isController": false}, {"data": ["PUT buyer/order/{id}", 200, 100, 50.0, 605.1649999999995, 6, 1662, 503.5, 1401.6, 1461.35, 1631.830000000001, 0.6900549283722984, 0.33424535593033206, 0.217663810414309], "isController": false}, {"data": ["GET buyer/product", 200, 100, 50.0, 617.5200000000003, 7, 3946, 230.0, 2177.800000000001, 2963.5499999999984, 3530.8900000000003, 0.679631775504032, 0.6666895688416017, 0.23202058031208692], "isController": false}, {"data": ["POST seller/product", 200, 100, 50.0, 10552.310000000005, 10, 42480, 9172.0, 28006.4, 36234.95, 42462.46000000001, 0.6267941983928997, 0.3066639583934011, 2.4743098848970804], "isController": false}, {"data": ["GET seller/product", 200, 100, 50.0, 2461.3049999999994, 6, 17835, 688.5, 7198.7, 12450.24999999999, 17533.75000000002, 0.665787826735376, 0.34394703158497447, 0.18373208302540645], "isController": false}, {"data": ["POST auth/login (as buyer)", 200, 100, 50.0, 633.8399999999996, 7, 3966, 292.0, 1699.3000000000009, 2271.85, 2991.78, 0.6773851578138071, 0.26791112198690614, 0.23456114861661018], "isController": false}, {"data": ["GET seller/category/{id}", 200, 100, 50.0, 1902.8749999999998, 7, 16558, 186.5, 7177.900000000006, 10520.8, 16535.67000000002, 0.6656681644200366, 0.22817336495257115, 0.18629932705109004], "isController": false}, {"data": ["POST buyer/order", 200, 100, 50.0, 1132.3050000000007, 7, 6703, 428.0, 3117.4000000000005, 4273.999999999995, 6138.970000000008, 0.6838495257503538, 0.3325752576403088, 0.22939678915551423], "isController": false}, {"data": ["DELETE seller/product/{id}", 200, 101, 50.5, 2319.2849999999985, 6, 40049, 568.0, 4933.6, 15690.199999999997, 26948.79, 0.6947990814756143, 0.21238189501238477, 0.20937946734096916], "isController": false}, {"data": ["GET buyer/product/{id}", 200, 100, 50.0, 492.1500000000001, 6, 3506, 208.0, 1545.2000000000014, 2003.5999999999997, 3469.7400000000002, 0.6811641094630724, 0.4024455920167566, 0.18997094941505033], "isController": false}, {"data": ["POST auth/login (as seller)", 200, 89, 44.5, 2505.630000000001, 7, 17045, 566.5, 10440.000000000002, 13700.949999999997, 15003.420000000002, 0.6259506625687763, 0.25436581026183513, 0.2179121308064748], "isController": false}, {"data": ["GET seller/category", 200, 100, 50.0, 2059.9199999999996, 6, 18532, 190.0, 6711.3, 9316.549999999997, 18499.34000000003, 0.6532126631806885, 1.046479857371015, 0.1808997198125933], "isController": false}, {"data": ["GET seller/product/{id}", 200, 100, 50.0, 1779.2800000000007, 6, 13259, 632.0, 4973.9000000000015, 7500.299999999995, 11964.81, 0.6718375765474939, 0.34641625040730156, 0.18802594909654644], "isController": false}, {"data": ["GET buyer/order/{id}", 200, 100, 50.0, 373.36000000000035, 6, 1151, 300.0, 782.5, 886.6499999999999, 1115.020000000001, 0.6882122997302208, 0.19557595627099048, 0.18515868024968343], "isController": false}, {"data": ["POST auth/register (as seller)", 200, 86, 43.0, 2579.3700000000003, 8, 22020, 765.5, 11003.700000000015, 17715.49999999998, 21755.86, 0.625058599243679, 0.28108714293527515, 0.7848453077632277], "isController": false}, {"data": ["DELETE buyer/order/{id}", 200, 100, 50.0, 380.74499999999983, 6, 1301, 322.0, 844.8, 906.0499999999997, 1206.4400000000005, 0.6934043379375381, 0.2146573975841793, 0.20111434410883675], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["502/Bad Gateway", 1676, 100.0, 49.294117647058826], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3400, 1676, "502/Bad Gateway", 1676, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET buyer/order", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST auth/register (as buyer)", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["PUT buyer/order/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET buyer/product", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST seller/product", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET seller/product", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST auth/login (as buyer)", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET seller/category/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST buyer/order", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["DELETE seller/product/{id}", 200, 101, "502/Bad Gateway", 101, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET buyer/product/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST auth/login (as seller)", 200, 89, "502/Bad Gateway", 89, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET seller/category", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET seller/product/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["GET buyer/order/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["POST auth/register (as seller)", 200, 86, "502/Bad Gateway", 86, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["DELETE buyer/order/{id}", 200, 100, "502/Bad Gateway", 100, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
