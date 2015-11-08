// JavaScript Document
 $(window).load(function(){
var screen = $.mobile.getScreenHeight();

var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();

var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();

var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

var content = screen - header - footer - contentCurrent;

$(".ui-content").height(content);

});//]]>  


//old way
/* $( document ).on( "pagecreate", '[data-role="page"]', function() {
    $( document ).on( "swipeleft swiperight", '[data-role="page"]', function( e ) {
      /*   We check if there is no open panel on the page because otherwise
        a swipe to close the left panel would also open the right panel (and v.v.).
        We do this by checking the data that the framework stores on the page element (panel: open). 
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#RightPanel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#LeftPanel" ).panel( "open" );
            }
        }
    });
}); */

/* new appraoch using class to check for swipe events
source https://forum.jquery.com/topic/open-panel-on-swipe !!
Works fine 
 */

$( document ).on( "pagecreate", ".ui-page", function() {
  var $page = $(this);
  $page.on( "swipeleft swiperight", function( e ) {
    if ( $page.jqmData( "panel" ) !== "open" ) {
      if ( e.type === "swipeleft"  ) {
        $page.find( ".right-panel" ).panel( "open" );
      } else if ( e.type === "swiperight" ) {
        $page.find( ".left-panel" ).panel( "open" );
      }
    }
  });
});
// 

//code to reedirect/close panel clicking a open page again !!! dont not delte this code !!!

$(document).on("pagecreate", function () {
$("[data-role=panel] a").on("click", function () {
if($(this).attr("href") == "#"+$.mobile.activePage[0].id) {
$("[data-role=panel]").panel("close");
}
});
});
