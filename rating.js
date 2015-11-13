;(function($){
    $.fn.getRating = function($args){
    	return $(this).attr("rating");
    };
  
    $.fn.stars=function($args){
    	$starHtml="";
        for(i=0;i<$args.max;++i)
    	$starHtml+="<img src='star-off.png'>";
    	$(this).html("").append($starHtml);
        $me = $(this);
    	$(this).attr("locked","false");
    	$(this).find("img").on('click',function(){
    		if($(this).parent().attr("locked")=="true")
    		return;	
			$starHtml="";
    		$upto = $(this).index()+1;
    		$(this).parent().attr("rating",$upto);
    		if($args.lockOnClick)
    		$(this).parent().attr("locked","true");
    		if($args.starClick)
    			$args.starClick($upto);
    	});

    	$(this).find("img").on('mouseout',function(){
    		if($(this).parent().attr("locked")=="true")
    		return;	
    		$upto = $(this).parent().attr("rating");
    		$counter = 0;
    		$(this).parent().find("img").each(function(){
    			$counter++;
    			if($counter<=$upto)
    			$(this).attr("src",'star-on.png');
    		    else 
    		    $(this).attr("src",'star-off.png');	
    		});
    	});

    	$(this).find("img").on('mousemove',function(){
    		if($(this).parent().attr("locked")=="true")
    		return;	
		$starHtml="";
    		$upto = $(this).index()+1;
    		$counter = 0;
    		$(this).parent().find("img").each(function(){
    			$counter++;
    			if($counter<=$upto)
    			$(this).attr("src",'star-on.png');
    		    else 
    		    $(this).attr("src",'star-off.png');	
    		});
    	});
    }
})(jQuery)
