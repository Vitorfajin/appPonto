var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
  document.querySelector("#startScan").addEventListener("touchend", startScan, false);
  resultDiv = document.querySelector("#results");
}

function startScan() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var s = "Result: " + result.text + "<br/>" +
      "Cancelled: " + result.cancelled;
      //resultDiv.innerHTML = s;

    },
    function (error) {
      alert("Scanning failed: " + error);
    }
  );
  document.getElementById('caixa').style.display = 'inline';
  document.getElementById('startScan').style.height = "64px";
  document.getElementById('startScan').style.width = "64px";
  document.getElementById('startScan').style.cssFloat = "left";

}
