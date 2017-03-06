// Adapted from w3schools
function IncludeHTML(callback_ready) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("include-html");
          IncludeHTML(callback_ready);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  // Load the rest when this is done
  if ( $("include-html").length == 0) {
    callback_ready();
  };
};
