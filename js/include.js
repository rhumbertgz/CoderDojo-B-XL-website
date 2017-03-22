// Adapted from w3schools

/*
  IncludeHTML zorgt ervoor dat alle tags die include-html bevatten zullen ingeladen worden.
  De manier waarop dit gebeurd is door over de hele webpagina te gaan en te zoeken naar alle
  tags die een atrribuut hebben "include-html".

  Eens we zo een element gevonden hebben dan vragen we aan de webserver om ons deze pagina op te sturen.
*/
function IncludeHTML(callback_ready) {
  var z, i, elmnt, file, xhttp;
  //Geef ons alle element van de webpagina
  z = document.getElementsByTagName("*");
  //Loop over alle deze elementen
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    //Als het element een "include-html" attribuut heeft
    if (elmnt.hasAttribute("include-html")) {
      //Maak een nieuwe aanvraag aan voor het ophalen van de webpagina
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        //Deze functie zal opgeroepen worden eens de aanvraag verwerkt is
        //We testen eerst of de aanvraag goed verlopen is
        if (this.readyState == 4 && this.status == 200) {
          //De code van de webpagina zelf zit in this.responseText
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("include-html");
          IncludeHTML(callback_ready);
        }
      };
      xhttp.open("GET", elmnt.getAttribute("include-html"), true);
      xhttp.send();
      return;
    }
  }
  /* Als we alle webpagina's ingeladen hebben dan
     zijn er helemaal geen tags meer met include-html op dat moment voeren we
     de callback functie uit.
  */
  if ( $("include-html").length == 0) {
    callback_ready();
  };
};
