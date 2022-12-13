function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("core").style.marginLeft = "250px";
  document.getElementById("naad").style.marginLeft = "250px";
  document.getElementById("naad1").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("core").style.marginLeft = "0";
  document.getElementById("naad").style.marginLeft = "0";
 
}


var xValues = [5,10,15,20,25,30];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [10,12,30,14,22,9,10],
      borderColor: "#80E2FF",
      fill: false
    }, { 
      data: [30,24,5,22,19,16,],
      borderColor: "#B5B3FB",
      fill: false
    }, ]
  },
  options: {
    legend: {
      display: false
    }
  }
});


var xValues = [5,10,15,20];
var yValues = [55, 49, 44, 24];
var barColors = [
  "#80E2FF",
  "#F49FA8",
  "#FFDF94",
  "#B5B3FB"
  
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [ { 
      data: [30,24,5,22,19,16,],
      backgroundColor: barColors,
      data: yValues,
      fill: true
    }, ]
  },
  options: {
    legend: {
      display: false
    }
  }
});


  
