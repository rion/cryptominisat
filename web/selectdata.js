var columnDivs = new Array();
var myData = new Array();
var clDistrib = new Array();
var simplificationPoints = new Array();
var maxConflRestart = new Array();

//while (true) {
//setInterval(function(){myajax.makeGetRequest(500005960);}, 2000);
//myajax.makeGetRequest(86533651);
//}

jQuery.getJSON(
    "getdata.php?id=" + "86533651"
     ,function(response){
        columnDivs = new Array();
        myData = new Array();
        clDistrib = new Array();
        simplificationPoints = new Array();
        maxConflRestart = new Array();

        columnDivs = response["columnDivs"];
        myData = response["myData"];
        simplificationPoints = response["simplificationPoints"];
        maxConflRestart = response["maxConflRestart"];
        doAll();
    }
);
