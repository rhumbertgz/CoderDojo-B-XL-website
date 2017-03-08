//Register asynchronous callback to translate the page from a json
function translate(lang) {
  $.getJSON('lang/'+lang+'.json', do_translate);
};

//Do the actual translation
function do_translate(data) {
    $("[key]").each(
      function() {
        $(this).html( unescape(data[ $(this).attr("key")]) );
      }
    );
};
