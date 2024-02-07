var url_string = window.location.href;
var url = new URL(url_string);
var q = window.atob(url.searchParams.get("topictd"));
var k = window.atob(url.searchParams.get("tdkey"));
var r = url.searchParams.get("td");
if (r == "valid") {
  document.getElementById("preId").value = q;
  document.getElementById("preK").value = k;
  readgenTOD();
} else {
  $("#intro").show();
}
