$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
  $.support.cors = true;
  $.mobile.allowCrossDomainPages = true;
  $.mobile.fallbackTransition.slideout = "none";
  
  // otherwise linking to other pages don't flow well
  $.mobile.ajaxEnabled = true;

  //defaults dates to text after selection
  $.mobile.page.prototype.options.degradeInputs.date = true;
});