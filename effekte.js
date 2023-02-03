 var x = 0;
var start=false;


 $( window ).on( "load", function() {
        window.scrollTo(0, 0);
	 $("h3").delay(1500).fadeIn(3000);
    });

$(document).ready(function(){
	
$( "#nav1Haupt").hover(
  function() {

    $( "#bildNavHaupt1" ).css({"opacity":"1"});
  }, function() {
     $( "#bildNavHaupt1" ).css({"opacity":"0"});
  });


$( "#nav2Haupt").hover(
  function() {

    $( "#bildNavHaupt2" ).css({"opacity":"1"});
  }, function() {
     $( "#bildNavHaupt2" ).css({"opacity":"0"});
  });
	
$( "#nav3Haupt").hover(
  function() {

    $( "#bildNavHaupt3" ).css({"opacity":"1"});
  }, function() {
     $( "#bildNavHaupt3" ).css({"opacity":"0"});
  });
  });


$(window).on('wheel', function(event){
    if(event.originalEvent.deltaY !== 0 && start==false){
      if(event.originalEvent.deltaY > 0){
         x++;
		  if(x>0){
			  land();
			  start=true;
		  }
	 }
	
	}
	if(window.innerWidth>600){
      
        if((window.pageYOffset+(window.innerHeight/2))>$("#navHaupt").offset().top){
          $("#navHaupt").css({"opacity":"1","top":"150vh"});
          
          }
    if((window.pageYOffset+(window.innerHeight/1.2))>$("#lnc").offset().top){
          $("#lnc").css({"opacity":"1","margin-top":"0em"});
          
          }
      }
      });
		
		function land(){
			$("body").css("overflow-y","scroll");
			 $("#uberschrift").animate({opacity:1},1000);
			 $('html, body').animate({ scrollTop: ($("#logo").offset().top)}, 'slow');
		
		}


  
  
 
