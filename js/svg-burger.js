			$(".menu").mouseleave(function() { 
				 
			  $(".menu #top.animate rect").bind('animationiteration webkitAnimationIteration', function() {
			    $(".menu #top").removeClass("animate");
			    $(".menu #top.animate rect").unbind('animationiteration webkitAnimationIteration');    
			  });
			  
			  $(".menu #middle.animate rect").bind('animationiteration webkitAnimationIteration', function() {
			    $(".menu #middle").removeClass("animate");
			    $(".menu #middle.animate rect").unbind('animationiteration webkitAnimationIteration');    
			  });	
			  
			  $(".menu #bottom.animate rect").bind('animationiteration webkitAnimationIteration', function() {
			    $(".menu #bottom").removeClass("animate");
			    $(".menu #bottom.animate rect").unbind('animationiteration webkitAnimationIteration');    
			  });			  		  
			  
			});
				
			$(".menu").mouseenter(function() {
			  $(".menu #top").addClass("animate");
			  $(".menu #middle").addClass("animate");
			  $(".menu #bottom").addClass("animate");
			});			
			
			
			$(".close").mouseleave(function() { 
				 
			  $(".close .rect.animate rect").bind('animationiteration webkitAnimationIteration', function() {
			    $(".close .rect").removeClass("animate");
			    $(".close .rect.animate rect").unbind('animationiteration webkitAnimationIteration');    
			  });
			  			  		  
			  
			});
				
			$(".close").mouseenter(function() {
			  $(".close .rect").addClass("animate");
			});			
			